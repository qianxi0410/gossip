import cli from '../../api'
import Markdown from '../../components/markdown'

import Link from 'next/link'

import type { NextPage } from 'next'

const PostDetail: NextPage = ({ post }) => (
  <div className="my-20">
    <div className="flex flex-col items-start mb-10">
      <div className="text-4xl font-bold">
        {post.title}
      </div>
      <div className="text-xl">
        <span>q1anx1</span> / <span>{post.created_at}</span> / <span>{post.updated_at}</span>
      </div>
    </div>

    <Markdown className="text-2xl font-normal">
      {post.body}
    </Markdown>

    <div>
      <Link href="/blog">
        <a className="flex flex-row justify-end text-2xl text-gray-500 hover:text-gray-700 transition-colors">cd ..</a>
      </Link>
    </div>
  </div>
)

// get all the posts id from the github issues
export const getStaticPaths = async () => {
  const { data: posts } = await cli.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'qianxi0410',
    repo: 'qianx1.xyz',
  })

  const paths = []
  for (const post of (posts as any)) {
    paths.push({
      params: {
        id: String(post.number),
      },
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params

  const { data: post } = await cli.rest.issues.get({
    owner: 'qianxi0410',
    repo: 'qianx1.xyz',
    issue_number: id,
  })

  return {
    props: {
      post,
    },
  }
}

export default PostDetail
