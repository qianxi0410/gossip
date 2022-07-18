import Header from '../components/header'
import Posts from '../components/posts'
import { fetchPosts, fetchUser } from '../lib'

import type { Post, User } from 'gossip'

import type { GetStaticProps, NextPage } from 'next'

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

const Index: NextPage<{ user: User; posts: Post[] }>
 = ({ user, posts }) => (
   <div className="space-y-10">
     <Header user={user} />
     <Posts posts={posts} />
   </div>
 )

export default Index
