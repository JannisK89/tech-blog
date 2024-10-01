import { GetStaticProps } from 'next/types'
import { getAllBlogPosts, getBlogPost } from '../../utils/getBlogPosts'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'

type Props = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  data: { [key: string]: string }
}

const Post = ({ data, content }: Props) => {
  return (
    <div className="md:mx-auto my-8 mx-6 h-full flex justify-center items-center">
      <article
        title={data.title}
        className="prose prose-slate dark:prose-invert "
      >
        <MDXRemote {...content} />
      </article>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const { data, content } = getBlogPost(slug)
  const mdxContent = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  })
  return {
    props: {
      content: mdxContent,
      data,
    },
  }
}

export const getStaticPaths = async () => {
  const posts = getAllBlogPosts()
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))
  return { paths, fallback: false }
}

export default Post
