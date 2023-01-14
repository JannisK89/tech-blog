import { GetStaticProps } from 'next/types'
import PostCard from '../../components/PostCard'
import getAllBlogPosts from '../../utils/getBlogPosts'

type Post = {
  data: { [key: string]: string }
  content: string
  slug: string
}

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="flex-1">
      {posts.map((post) => {
        return <PostCard key={post.data.id} data={post.data} />
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = getAllBlogPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Posts
