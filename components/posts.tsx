import { formatDate, groupByDate } from '../lib'

import Link from 'next/link'

import type { Post } from 'gossip'

const PostItem: React.FC<{ post: Post }> = ({ post }) => (
  <div className="flex flex-row flex-wrap my-1 justify-between">
    <Link href={`/post/${post.id}`} className="cursor-pointer">
      <a className="sm:text-2xl text-lg font-medium transition-all hover:underline hover:underline-offset-8">{post.title}</a>
    </Link>
    <span className="text-xs sm:text-lg italic font-light self-center">{formatDate(post.created_at)}</span>
  </div>
)

interface BlockProperties {
  year: string
  items: Post[]
}

const PostBlock: React.FC<BlockProperties> = ({ year, items }) => (
  <div className="flex flex-col my-10">
    <div className="sm:text-3xl text-2xl font-medium sm:my-3 my-1 italic text-gray-500 dark:text-gray-100">{year}</div>
    {items.map(item => (
      <PostItem key={item.id} post={item} />
    ))}
  </div>
)

const Posts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const map = groupByDate(posts)

  if (map.size === 0) {
    return (
      <div className="text-xl">No posts found. :D</div>
    )
  }

  return (
    <>
      {
        [...map].map(([year, items]) => (
          <PostBlock key={year} year={year} items={items} />
        ))
      }
    </>
  )
}

export default Posts
