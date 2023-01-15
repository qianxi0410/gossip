import type { Post } from 'gossip'

// format date string
export const formatDate = (date: string) => {
  const d = new Date(date)
  // if year is current year, just return month and day
  if (d.getFullYear() === new Date().getFullYear()) return `${d.getMonth() + 1}月${d.getDate()}日`
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
}

export const formatDateShort = (date: string) => {
  const d = new Date(date)
  return `${d.getMonth() + 1}月${d.getDate()}日`
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

export const isGithubChannel = () => process.env.DEPLOY_TARGET === 'gh-pages'

export const isSpecialRepo = () => process.env.REPO === `${process.env.OWNER}.github.io`
