import Layout from '../components/layout'
import Posts from '../components/posts'
import { fetchPosts, fetchUser } from '../lib'

import genRSS from '../lib/rss'

import { useTheme } from 'next-themes'

import Image from 'next/image'

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

const Index: NextPageWithLayout<{ posts: Post[]; user: User }>
 = ({ posts, user }) => {
   const { setTheme } = useTheme()

   if (process.env.theme !== 'both') setTheme(process.env.theme || 'dark')

   return (
     <div>
       <div className="mb-8 mx-auto inline-block">
         <div className="relative md:w-24 md:h-24 w-14 h-14 mb-3">
           <Image src={user.avatar_url} alt="avatar" fill className="rounded-full" />
         </div>
         <p className="mx-auto lg:text-xl text-md italic font-en">{process.env.bio || user.bio}</p>
         <hr className="dark:border-dashed" />
       </div>

       <div className="space-y-10 dark:text-gray-400">
         <Posts posts={posts} />
       </div>
     </div>

   )
 }

Index.getLayout = page => <Layout middle={page} />

export default Index
