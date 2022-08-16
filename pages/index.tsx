import Header from '../components/header'
import Layout from '../components/layout'
import Posts from '../components/posts'
import { fetchPosts, fetchUser } from '../lib'

import genRSS from '../lib/rss'

import { useTheme } from 'next-themes'

import type { NextPageWithLayout, Post, User } from 'gossip'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])

  if (process.env.rss === 'true') genRSS(posts, user)

  return {
    props: {
      user,
      posts,
    },
  }
}

const Index: NextPageWithLayout<{ user: User; posts: Post[] }>
 = ({ user, posts }) => {
   const { setTheme } = useTheme()

   if (process.env.theme !== 'both') setTheme(process.env.theme || 'dark')

   return (
     <div className="space-y-10 dark:text-gray-400 font-zh">
       <Header user={user} />
       <Posts posts={posts} />
     </div>
   )
 }

Index.getLayout = page => <Layout middle={page} />

export default Index
