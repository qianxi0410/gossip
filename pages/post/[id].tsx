import Comments from '../../components/comments'
import CopyRight from '../../components/copyright'
import Moon from '../../components/icons/moon'
import Sun from '../../components/icons/sun'
import Markdown from '../../components/markdown'
import Reactions from '../../components/reactions'
import { fetchPaths, fetchPost, formatDate } from '../../lib'

import { useTheme } from 'next-themes'
import Link from 'next/link'

import type { Post } from 'gossip'
import type { NextPage } from 'next'

const PostDetail: NextPage<{ post: Post }> = ({ post }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="my-10 sm:my-20">
      <div className="flex flex-row justify-between mb-5">

        <div className="flex flex-col items-start">
          <div className="text-2xl sm:text-4xl font-bold dark:text-gray-200">
            {post.title}
          </div>
          <div className="sm:text-lg text-sm dark:text-gray-400">
            <span>{post.author}</span> /&nbsp;
            <span>{formatDate(post.created_at)}</span> /&nbsp;
            <span>{formatDate(post.updated_at)}</span>
          </div>
        </div>

        <div className="text-sm sm:text-lg self-center">
          {
            theme === 'light'
              ? <Moon width="2em" height="2em" onClick={() => setTheme('dark')} />
              : <Sun width="2em" height="2em" onClick={() => setTheme('light')} />
          }
        </div>

      </div>

      {
        post.reactions.total_count > 0
        && <Reactions
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

      <Comments issueNumber={post.id} />

      <Link href="/">
        <a className="float-right mt-10 sm:text-2xl text-xl text-gray-500 hover:text-black hover:underline hover:underline-offset-4 transition-all dark:text-gray-400 dark:hover:text-gray-100">cd ..</a>
      </Link>

      <CopyRight className="bottom-0 mt-20" />
    </div>
  )
}

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
