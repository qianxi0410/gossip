import Cache from './cache'
import cli from './cli'

import type { Post } from 'gossip'

const cache = new Cache<Post>()

// fetch the static ids
export const fetchPaths = async () => {
  const { data: posts } = await cli.rest.issues.listForRepo({
    owner: process.env.OWNER!,
    repo: process.env.REPO!,
    labels: process.env.LABELS!,
    per_page: 100,
  })

  return posts.map(post => ({
    params: {
      id: post.title,
    },
  }))
}

// fetch posts list
export const fetchPosts = async () => {
  const { data } = await cli.rest.issues.listForRepo({
    owner: process.env.OWNER!,
    repo: process.env.REPO!,
    labels: process.env.LABELS!,
    per_page: 100,
  })

  const posts: Post[] = []

  for (const p of data) {
    posts.push({
      id: p.number,
      title: p.title,
      created_at: p.created_at,
      updated_at: p.updated_at,
      content: p.body!,
      author: process.env.OWNER!,
      reactions: {
        ...p.reactions!,
      },
      labels: p.labels!.map((l) => {
        const r = l as { name: string }
        return r.name
      }),
    })
  }

  return posts
}

// fetch post data
export const fetchPost = async (title: string) => {
  if (cache.keys().length > 0) {
    const post = cache.get(title)

    if (post) return post
  }

  const { data } = await cli.rest.issues.listForRepo({
    owner: process.env.OWNER!,
    repo: process.env.REPO!,
    labels: process.env.LABELS!,
    per_page: 100,
  })

  const posts: Post[] = []

  for (const p of data) {
    posts.push({
      id: p.number,
      title: p.title,
      created_at: p.created_at,
      updated_at: p.updated_at,
      content: p.body!,
      author: process.env.OWNER!,
      reactions: {
        ...p.reactions!,
      },
      labels: p.labels!.map((l) => {
        const r = l as { name: string }
        return r.name
      }),
    })
  }

  for (const p of posts) cache.set(p.title, p)

  return cache.get(title)
}

// fetch tags list
export const fetchTagPaths = async () => {
  const { data } = await cli.rest.issues.listForRepo({
    owner: process.env.OWNER!,
    repo: process.env.REPO!,
    labels: process.env.LABELS!,
    per_page: 100,
  })

  const tags = new Set<string>()

  for (const p of data) {
    for (const l of p.labels!) {
      const r = l as { name: string }
      tags.add(r.name)
    }
  }

  return [...tags].map(tag => ({
    params: {
      id: tag,
    },
  }))
}

// fetch posts list by tag
export const fetchPostsByTag = async (tag: string) => {
  const { data } = await cli.rest.issues.listForRepo({
    owner: process.env.OWNER!,
    repo: process.env.REPO!,
    labels: [process.env.LABELS!.split(','), tag].join(','),
    per_page: 100,
  })

  const posts: Post[] = []
  for (const p of data) {
    posts.push({
      id: p.number,
      title: p.title,
      created_at: p.created_at,
      updated_at: p.updated_at,
      content: p.body!,
      author: process.env.OWNER!,
      reactions: {
        ...p.reactions!,
      },
      labels: p.labels!.map((l) => {
        const r = l as { name: string }
        return r.name
      }),
    })
  }

  return posts
}

// format date string
export const formatDate = (date: string) => {
  const d = new Date(date)
  // if year is current year, just return month and day
  if (d.getFullYear() === new Date().getFullYear()) return `${d.getMonth() + 1}月${d.getDate()}日`
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
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
