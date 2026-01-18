import fs from 'fs'
import RSS from 'rss'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), '/src/posts')
const publicDir = path.join(process.cwd(), 'public')

const posts = fs
  .readdirSync(postsDir)
  .filter((file) => path.extname(file) === '.md' || path.extname(file) === '.mdx')
  .map((file) => {
    const filePath = path.join(postsDir, file)
    const postContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(postContent)
    return Object.assign({}, data || {}, { body: content })
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const renderer = new marked.Renderer()

renderer.link = ({ href, title, tokens }) => {
  const inner = renderer.parser.parseInline(tokens)
  const safeHref = href ?? inner
  let s = `<a href="${safeHref}"`
  if (title) s += ` title="${title}"`
  s += ` target="_blank" rel="noopener noreferrer">${inner}</a>`
  return s
}

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer,
})

const renderPost = async (md) => {
  const result = marked.parse(md)
  return typeof result === 'string' ? result : await result
}

const main = async () => {
  const feed = new RSS({
    title: 'Victor Cherkashyn',
    site_url: 'https://cherkashyn.me',
    feed_url: 'https://cherkashyn.me/feed.xml',
    language: 'en',
    description: "Victor Cherkashyn's blog",
  })

  for (const post of posts) {
    const url = `https://cherkashyn.me/blog/${post.slug}`
    const description = await renderPost(post.body)

    feed.item({
      title: post.title,
      description,
      date: new Date(post.date),
      author: 'Victor Cherkashyn',
      url,
      guid: url,
    })
  }

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(publicDir, 'feed.xml'), rss)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})