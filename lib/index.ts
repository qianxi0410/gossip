import config from './config'

import { Octokit } from 'octokit'

import type { Post, User } from 'gossip'

const cli = new Octokit()

// fetch the user info
export const fetchUser = async () => {
  const { data } = await cli.rest.users.getByUsername({
    username: config.user,
  })

  const user: User = {
    login: data.login,
    nick_name: data.name || data.login,
    avatar_url: data.avatar_url,
    bio: data.bio ?? 'I have nothing to say.',
  }

  return user
}

// fetch the static ids
export const fetchPaths = async () => {
  const { data: posts } = await cli.rest.issues.listForRepo({
    owner: config.user,
    repo: config.repo,
  })

  return posts.map(post => ({
    params: {
      id: post.number.toString(),
    },
  }))
}

// fetch posts list
export const fetchPosts = async () => {
  const { data } = await cli.rest.issues.listForRepo({
    owner: config.user,
    repo: config.repo,
  })

  const posts: Post[] = []

  for (const p of data) {
    posts.push({
      id: p.number,
      title: p.title,
      created_at: p.created_at,
      updated_at: p.updated_at,
      content: p.body!,
      author: config.user,
    })
  }

  return posts
}

// fetch post data
export const fetchPost = async (id: string) => {
  const { data } = await cli.rest.issues.get({
    owner: config.user,
    repo: config.repo,
    issue_number: Number(id),
  })

  const post: Post = {
    id: data.number,
    title: data.title,
    created_at: data.created_at,
    updated_at: data.updated_at,
    content: data.body!,
    author: config.user,
  }

  return post
}

// format date string
export const formatDate = (date: string) => {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// format post list content
export const groupByDate = (posts: Post[]) => {
  const map = new Map<string, Post[]>()

  for (const post of posts) {
    const year = post.created_at.split('-')[0]
    const list = map.get(year) || []

    list.push(post)
    map.set(year, list)
  }

  return map
}
