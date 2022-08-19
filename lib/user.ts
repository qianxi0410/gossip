import cli from './cli'

import type { User } from 'gossip'

// fetch the user info
const fetchUser = async () => {
  const { data } = await cli.rest.users.getByUsername({
    username: process.env.OWNER!,
  })

  const user: User = {
    login: data.login,
    nick_name: data.name || data.login,
    avatar_url: data.avatar_url,
    bio: data.bio ?? 'I have nothing to say.',
  }

  return user
}

// eslint-disable-next-line import/prefer-default-export
export { fetchUser }
