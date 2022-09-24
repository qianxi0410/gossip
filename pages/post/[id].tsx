import Comments from '../../components/comments'
import Layout from '../../components/layout'
import Markdown from '../../components/markdown'
import Reactions from '../../components/reactions'
import { fetchPaths, fetchPost, formatDate } from '../../lib'

import Link from 'next/link'

import type { NextPageWithLayout, Post } from 'gossip'

const PostDetail: NextPageWithLayout<{ post: Post }> = ({ post }) => (
  <div className="mb-10 sm:mb-20">
    <div className="flex flex-col mb-5 items-center">
      <div className="text-3xl sm:text-5xl font-medium dark:text-gray-200">
        {post.title}
      </div>
      <div className="sm:text-xl text-lg mt-3 dark:text-gray-400">
        <span>{formatDate(post.created_at)}</span> /&nbsp;
        <span>{formatDate(post.updated_at)}</span>
      </div>
    </div>

    {
      post.reactions.total_count > 0
        && <Reactions
          id={post.id}
          nice={post.reactions['+1']}
          bad={post.reactions['-1']}
          hooray={post.reactions.hooray}
          rocket={post.reactions.rocket}
          eyes={post.reactions.eyes}
          laugh={post.reactions.laugh}
          confused={post.reactions.confused}
          heart={post.reactions.heart}
        />
    }

    <Markdown className="font-normal">
      {post.content}
    </Markdown>
    <br />
    <Comments issueNumber={post.id} />

    <Link href="/">
      <a className="float-right mt-10 sm:text-2xl text-xl text-gray-500 hover:text-black hover:underline hover:underline-offset-4 transition-all dark:text-gray-400 dark:hover:text-gray-100">cd ..</a>
    </Link>
  </div>
)

PostDetail.getLayout = page => <Layout middle={page} />

// get all the posts id from the github issues
export const getStaticPaths = async () => ({
  paths: await fetchPaths(),
  fallback: false,
})

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const post = await fetchPost(id)

  return {
    props: {
      post,
    },
  }
}

export default PostDetail
