import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import path from 'path'

export const getAllBlogPosts = () => {
  const postFiles: string[] = fs.readdirSync(path.join('posts'))
  const allContent = postFiles.map((file) => {
    const slug: string = file.replace('.mdx', '')
    const fileContent: Buffer = fs.readFileSync(path.join(`posts/${file}`))
    const { data, content }: GrayMatterFile<Buffer> = matter(fileContent)
    return { data, content, slug }
  })
  return allContent
}

export const getBlogPost = (slug: string) => {
  const file: Buffer = fs.readFileSync(path.join(`posts/${slug}.mdx`))
  const { data, content }: GrayMatterFile<Buffer> = matter(file)
  return { data, content }
}
