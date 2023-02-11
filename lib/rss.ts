import RSS from 'rss'

import { writeFileSync } from 'node:fs'

import type { Post, User } from 'gossip'

const genRSS = (posts: Post[], user: User) => {
  const siteURL = 'https://qianxi0410.github.io/gossip'

  const feed = new RSS({
    title: process.env.OWNER!,
    description: user.bio,
    site_url: siteURL,
    feed_url: `${siteURL}/feed.xml`,
    language: 'zh-CN',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${process.env.OWNER!}`,
  })

  for (const post of posts) {
    feed.item({
      title: post.title,
      url: `${siteURL}/post/${post.title}`,
      date: post.created_at,
      description: post.labels
        .filter(label => !process.env.LABELS!.split(',').includes(label))
        .join(', '),
    })
  }

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

export default genRSS
