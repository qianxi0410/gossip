import cli from '../api'
import Welcome from '../components/welcome'

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ ...user }) => (
  <Welcome
    avatar={user.avatar_url}
    company={user.company}
    location={user.location}
    github={`https://github.com/${user.login}`}
    twitter={user.twitter_username ? `https://twitter.com/${user.twitter_username}` : ''}
    name={user.name || user.login}
    motto={user.bio || 'I have nothing to say.'}
  />
)

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await cli.rest.users.getByUsername({
    username: 'qianxi0410',
  })

  return {
    props: {
      ...data,
    },
  }
}

export default Index
