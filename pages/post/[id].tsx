import CopyRight from '../../components/copyright'
import Markdown from '../../components/markdown'
import { fetchPaths, fetchPost, formatDate } from '../../lib'

import Link from 'next/link'

import type { Post } from 'gossip'
import type { NextPage } from 'next'

const PostDetail: NextPage<{ post: Post }> = ({ post }) => (
  <div className="my-20">
    <div className="flex flex-col items-start mb-10">
      <div className="text-4xl font-bold">
        {post.title}
      </div>
      <div className="text-xl">
        <span>{post.author}</span> /&nbsp;
        <span>{formatDate(post.created_at)}</span> /&nbsp;
        <span>{formatDate(post.updated_at)}</span>
      </div>
    </div>

    <Markdown className="text-2xl font-normal">
      {post.content}
    </Markdown>

    <Link href="/">
      <a className="flex flex-row justify-end text-2xl text-gray-500 hover:text-black hover:underline hover:underline-offset-4 transition-all">cd ..</a>
    </Link>

    <CopyRight className="bottom-0 mt-5" />
  </div>
)

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
