import cli from '../api'
import Header from '../components/header'
import Posts from '../components/posts'

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>>
 = ({ user, posts }) => (
   <div className="space-y-10">
     <Header avatar={user.avatar_url} motto={user.bio} name={user.name || user.login} />
     <Posts posts={posts} />
   </div>
 )

export const getStaticProps: GetStaticProps = async () => {
  const { data: user } = await cli.rest.users.getByUsername({
    username: 'qianxi0410',
  })

  const { data: posts } = await cli.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'qianxi0410',
    repo: 'qianx1.xyz',
  })

  return {
    props: {
      user,
      posts,
    },
  }
}

export default Blog
