import { formatDate, groupByDate } from '../lib'

import Link from 'next/link'

import type { Post } from 'gossip'

const PostItem: React.FC<{ post: Post }> = ({ post }) => (
  <div className="flex flex-row space-y-3 cursor-pointer items-start justify-between">
    <Link href={`/post/${post.id}`}>
      <a className="text-2xl font-medium hover:text-gray-500 transition-colors">{post.title}</a>
    </Link>
    <div className="text-xm italic font-light">{formatDate(post.created_at)}</div>
  </div>
)

interface BlockProperties {
  year: string
  items: Post[]
}

const PostBlock: React.FC<BlockProperties> = ({ year, items }) => (
  <div className="flex flex-col my-10">
    <div className="text-3xl font-medium my-3 italic text-gray-700">{year}</div>
    {items.map(item => (
      <PostItem key={item.id} post={item} />
    ))}
  </div>
)

const Posts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const map = groupByDate(posts)

  return (
    <div>
      <div className="italic font-bold text-3xl mb-3">Posts</div>
      {
        [...map].map(([year, items]) => (
          <PostBlock key={year} year={year} items={items} />
        ))
      }
    </div>
  )
}

export default Posts
