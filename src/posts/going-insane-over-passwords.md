---
title: Password manager user on the spectrum
date: 08-30-2026
tags: ['security', 'misc']
description: I am oddly obsessed with ensuring my password manager's contents are well-organised and adhere to best practices.
---

The task I self-assigned to myself was to deploy Proxmox VE on a Mini PC in order to turn it into a server. This requires creating credentials for web interface. SSH key is important to have too. Of course, my ADHD—or whatever other buzzword I self-diagnosed myself with—kicked in right after I noticed how cluttered my password manager had become.

Since the beginning of my password vault, the structure had been as follows:
```
Root
|----Email provider folder 1
|----Email provider folder 2
...
|----Email provider folder N
```
After years of adding new accounts, navigating my password manager became cumbersome. The impact was most evident in the Root folder, where the new entries were now placed. Instead of relying on the search function—like any normal person would—I decided that before deploying my homelab, I had to confront the inner demon whispering in my ear to reorganise how and where I save my credentials.

To do that, I first skimmed through all entries to locate any non-used ones. Unfortunate winners of such hunger games had to be requested for removal from the server of the service provider's server and then deleted from the vault. There's a helpful website called [JustDeleteMe](https://justdeleteme.xyz/en) greatly simplifies this process: it crowdsources information on how to delete your account on different services. Now, instead of scanning through FAQs, user forums, and asking support teama, you are presented with a direct link straight to the account removal form. In cases where such an option doesn't exist or the service insists you must talk to the support team first, JustDeleteMe mentions that as well, which also saves time immensely. 

Somewhere during the aforementioned process, I stumbled upon a hilarious case of an online casino taking over a website that previously hosted online Math olympiads for high schoolers. The latest [Wayback Machine capture](https://web.archive.org/web/20260215102445/https://deltamatem.km.ua/) still shows the original website as of 25th of February. Permanent links seem to be an unknown concept to Ukrainian bureaucracy. Probably as well as anything permanent. Or maybe it was an honest mistake by someone who forgot to renew their domain name, who knows.

Next, I took the time to migrate emails for certain accounts, as I now treat all aliases hosted on my email provider's domain as disposable. Everything that matters to me now lives on my own domain, cherkashyn.me. I am still torn about cases like Steam: on one hand, I don't really want my gaming account to be tied to my real identity, but on the other hand, I wasted enough money on video games that losing access to my email and Steam library would be greatly disappointing.

Lastly, I created subdirectories for each service category that had 3+ entries in it. I have a decent amount of these, and some were even awarded a fancy icon! Doing this took multiple lunch breaks at work, but by the end of the week, I was remarkably satisfied with the state of my password database.

Each entry is now happily thriving within its semantic category:
```
Root
|----Dev
|----Learning
...
|----Hardware
```
As you might have suspected, Proxmox VE on my homelab was not deployed until a few weeks later. Another day — another banger ᕙ( •̀ ᗜ •́ )ᕗ


