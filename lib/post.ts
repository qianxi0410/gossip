import cli from './cli'

import type { Post } from 'gossip'

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
  const posts = await fetchPosts()
  return posts.find(post => post.title === title)
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

  const specialTags = process.env.LABELS!.split(',')

  return [...tags].filter(tag => !specialTags.includes(tag)).map(tag => ({
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
