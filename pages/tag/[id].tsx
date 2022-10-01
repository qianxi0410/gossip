import Layout from '../../components/layout'
import Posts from '../../components/posts'
import { fetchPostsByTag, fetchTagPaths } from '../../lib'

import type { NextPageWithLayout, Post } from 'gossip'

const Tag: NextPageWithLayout<{ posts: Post[]; tag: string }> = ({ tag, posts }) => (
  <div>
    <div className="mb-5 text-center text-4xl dark:text-gray-400">
      #{tag}
    </div>
    <Posts posts={posts} />
  </div>
)

Tag.getLayout = page => <Layout middle={page} />

// get all the posts id from the github issues
export const getStaticPaths = async () => ({
  paths: await fetchTagPaths(),
  fallback: false,
})

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const { id: tag } = params

  const posts = await fetchPostsByTag(tag)

  return {
    props: {
      posts,
      tag,
    },
  }
}

export default Tag
