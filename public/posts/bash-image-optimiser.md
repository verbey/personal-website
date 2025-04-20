---
title: 'Coding a simple Bash Image Optimiser!'
description: 'A short guide to use bash to create a tool to automatically detect new images and try to reduce their size.'
tags: ['bash', 'linux', 'coding']
date: 05-26-2024
---

## Introduction

Nothing better than learning coding by practicing, right? Right??? I sure hope you agree, because that is precisely what we will be doing right now!

Bash is truly a blessing because you can start building amazing things using many kinds of libraries and CLI tools right away.

For today, let's try building the base for a picture optimi**z**er (I'm really torn how I should refer to the thing in the text, because I prefer the Bri'ish spelling but want to keep everything programming-related with the American spelling).

## Preparations

-   Install bash on your system if, for some reason, it is not installed yet.
-   Install [`optipng`](https://linux.die.net/man/1/optipng).
-   Install [`inotify-tools`](https://github.com/inotify-tools/inotify-tools).
-   Get a grasp on the most basic bash syntax. Nothing too serious. Maybe skim through a few chapters of [this](https://tldp.org/LDP/abs/html/index.html) or watch a few YouTube videos. It doesn't matter.
-   Learn how to exit vim or get your text editor of choice ready by creating and opening a file named `imgoptimizer.sh`

## Getting started

We will start with the usual, let's add a shebang to our script:

```bash
#!/bin/bash
```

Now, I'd like us to follow at least [some of the self-proclaimed best practices](https://github.com/progrium/bashstyle). That's why the _main_ code will go in the... bingo! `main` function:

```bash
#!/bin/bash

main() {
	set -eo pipefail
}

main "$@" # here we call our function with the special parameter - $@ contains all parameters that were passed to the script
```

Note the `set -eo pipefail`. This thing makes the script failfast and makes the shell [punish us](https://unix.stackexchange.com/questions/597500/what-is-the-meaning-of-set-e-o-pipefail) if the script is poorly-written. Teehee~

Obviously, our script has to know what directory to monitor. Let's declare a variable called `DIRECTORY` (you can put any other value, really):

```bash
#!/bin/bash

main() {
	set -eo pipefail

	readonly DIRECTORY=$HOME/Pictures # readonly specifies a constant variable
}

main "$@"
```

## The neat part

Now, let's setup the part where we launch the watches for new files in our directory:

```bash
inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
                optipng -o4 "$filename"
            fi
        done
```

Here's the [inotifywait docs](https://linux.die.net/man/1/inotifywait) to help explain how the command works. Most of the used options are self-explanatory (since I used the full versions), I'll only explain `--format`. `optipng` needs to know which file it should optimize. That's why we [pipe the output](https://linuxhint.com/bash_pipe_tutorial/) of the `inotifywait` command to the while loop that reads the said output and uses `optipng` on it: `--format "%w%f"` outputs the absolute path to the newly created file.

```bash
optipng -o4 "$filename"
```

Runs the `optipng` program on the file with the optimization level (the `-o` flag) of 4. Choosing the right level is a [dialectical process](https://plato.stanford.edu/entries/hegel-dialectics/#HegeDescHisDialMeth) which is driven by the contradiction of optimization quality vs the time it takes to run the whole thing. See for yourself what's best for your machine. In my case, I settle for the level 4 as the most optimal (pun intended) one.

Here's how the thing should look so far:

```bash
#!/bin/bash

main() {
	set -eo pipefail

	readonly DIRECTORY=$HOME/Pictures

	inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
                optipng -o4 "$filename"
        done
}

main "$@"
```

Let's try running it with

```bash
bash imgoptimize.sh
```

Try to create a new `.png` file in the directory, for example, by creating a screenshot that would be saved there.

Wait, oh nyo! Sometimes it errors out, because `inotifywait` passes the filename _before_ the file is actually fully created!

Let's add a `sleep` command with `3s` as its argument. This time should be just enough to wait until the file is fully written to the disk.

We might as well wrap up the loop in an if statement checking if the file is a PNG one, just in case:

```bash
#!/bin/bash

main() {
	set -eo pipefail

	readonly DIRECTORY=$HOME/Pictures

	inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
            if [[ "$filename" == *.png ]]; then
                sleep 3s
                optipng -o4 "$filename"
            fi
        done
}

main "$@"
```

Great, now let's try running the thing again... It works! _But_ since `optipng` overrides the file, it triggers the `inotify` watches again on the technically same file. Luckily, `optipng` won't try to optimize an already optimized file but it would still be nicer and faster for the script if we didn't bother with such files at all!

The most obvious solution is to add a variable that will store the last filename. Thus, the script should look something like this:

```bash
#!/bin/bash

main() {
	set -eo pipefail

	readonly DIRECTORY=$HOME/Pictures

	last_filename=""

    inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
            if [[ "$filename" == *.png ]] && [[ "$filename" != "$last_filename" ]]; then
                last_filename="$filename"
                sleep 3s
                optipng -o4 "$filename"
            fi
        done
}

main "$@"
```

## Final touches

We have a quite useful script now, but we can make it a little bit better if we move the config to a separate file.

In your terminal, create a directory and a file for the rc of our script. For example, like this:

```bash
mkdir ~/.config/imgoptimize && touch ~/.config/imgoptimize/imgoptimizerc
```

In that file, let's specify the directory we want our script to monitor:

```bash
DIRECTORY=/home/user/Pictures
```

We should now rewrite our script to use the config file:

```bash
#!/bin/bash

main() {
    set -eo pipefail

    readonly CONFIG_FILE="$HOME/.config/imgoptimize/imgoptimizerc"
	readonly DIRECTORY="$(cat "$CONFIG_FILE" | grep --regexp ^DIRECTORY | cut --delimiter "=" --fields 2)"

    last_filename=""

    inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
            if [[ "$filename" == *.png ]] && [[ "$filename" != "$last_filename" ]]; then
                last_filename="$filename"
                sleep 3s
                optipng -o4 "$filename"
            fi
        done
}

main "$@"
```

Check the DIRECTORY variable out:

`$()` is the syntax for executing shell commands in a subshell (command substitution). In there, I first use the `cat` command to output the contents of a file, then pipe the output to `grep` command that uses a regular expression to find the line containing the constant `DIRECTORY`. What's left now is to extract the actual path, which I do using the `cut` command: `--delimiter` option specifies the character where the string will be split, and the `--fields` specifies what part of the split string the command should return.

Note that we could just do

```bash
source $HOME/.config/imgoptimize/imgoptimizerc
```

which will execute the file as shell code, and so simply declare the `DIRECTORY` variable, but that also means _all_ code from the file will be executed, which may even lead to [a hole in security](https://unix.stackexchange.com/questions/175648/use-config-file-for-my-shell-script). It's _unlikely_ that something like that will happen to you with such a script, though.

Annnnd let's add some check whether the config file and the directory were found, using [standart test flags](https://tldp.org/LDP/abs/html/tests.html):

```bash
	#!/bin/bash

main() {
    set -eo pipefail

    readonly CONFIG_FILE="$HOME/.config/imgoptimize/imgoptimizerc"
    if [[ -f "$CONFIG_FILE" ]]; then
        readonly DIRECTORY="$(cat "$CONFIG_FILE" | grep --regexp ^DIRECTORY | cut --delimiter "=" --fields 2)"
    else
        echo "Config file $CONFIG_FILE not found. Exiting."
        exit 1
    fi

    if [[ ! -d $DIRECTORY ]]; then
        echo "Invalid DIRECTORY specified in config file. Exiting."
        exit 1
    fi

    last_filename=""

    inotifywait --monitor --recursive --event create --format "%w%f" "$DIRECTORY" |
        while read filename; do
            if [[ "$filename" == *.png ]] && [[ "$filename" != "$last_filename" ]]; then
                last_filename="$filename"
                sleep 3s
                optipng -o4 "$filename"
            fi
        done
}

main "$@"
```

This is it! We did it! Hooray!

## What to do next

You didn't think the whole Code Along would be just me holding your hand and walking you through the whole thing, did you? Try extending the script in some ways to solidify what you might've learned today. For example, you can:

-   Add more config options! Optimization levels for `optipng`, `sleep` time, etc.
-   Make the script "optimize" (compress) other image formats, such as `jpg`. [`imagemagick`](https://imagemagick.org/) can [help you](https://stackoverflow.com/questions/7261855/recommendation-for-compressing-jpg-files-with-imagemagick) with that task.
-   Research how to make the script automatically execute on system start.- See what other things you can do with the images, such as adjusting the resolution to match your monitor. Why have a 2500x2500 image on your computer if your display's resolution is only 1920x1080?

## Conclusion

Studying programming by building things is great, and it's even better when you have an idea of what you can do. That's why I wanted to start the Code Along series. Procrastination is a common issue in self-study, so I genuinely hope that these series will help someone ignite their enthusiasm and learn more quickly and easily.

ヾ(\*▼・▼)ﾉ ⌒☆
