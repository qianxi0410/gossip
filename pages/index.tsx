import Header from '../components/header'
import Layout from '../components/layout'
import Posts from '../components/posts'
import { fetchPosts, fetchUser } from '../lib'

import type { NextPageWithLayout, Post, User } from 'gossip'
import type { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const user = await fetchUser()
  const posts = await fetchPosts()

  return {
    props: {
      user,
      posts,
    },
  }
}

const Index: NextPageWithLayout<{ user: User; posts: Post[] }>
 = ({ user, posts }) => (
   <div className="space-y-10 dark:text-gray-400 font-zh">
     <Header user={user} />
     <Posts posts={posts} />
   </div>
 )

Index.getLayout = page => <Layout middle={page} />

export default Index
