import Home from '../../components/icons/home'
import Moon from '../../components/icons/moon'
import Sun from '../../components/icons/sun'
import Layout from '../../components/layout'

import Posts from '../../components/posts'
import { fetchPostsByTag, fetchTagPaths } from '../../lib'

import { useTheme } from 'next-themes'

import type { NextPageWithLayout, Post } from 'gossip'

const Tag: NextPageWithLayout<{ posts: Post[]; tag: string }> = ({ tag, posts }) => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="font-zh">
      <div className="mt-16 flex flex-row justify-between">
        <span className="text-6xl">
          #{tag}
        </span>
        <div className="self-center flex flex-row space-x-5">
          <Home width="2em" height="2em" />
          {
            theme === 'light'
              ? <Moon width="2em" height="2em" onClick={() => setTheme('dark')} />
              : <Sun width="2em" height="2em" onClick={() => setTheme('light')} />
          }
        </div>
      </div>
      <Posts posts={posts} />
    </div>
  )
}

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
