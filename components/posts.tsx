import { formatDate, groupByDate } from '../lib'

import Link from 'next/link'

import type { Post } from 'gossip'

const Tags = ({ tags }: { tags: string[] }) => {
  const specialTags = process.env.LABELS!.split(',')
  const isSpecialTag = (tag: string) => specialTags.includes(tag)

  tags = tags.filter(tag => !isSpecialTag(tag))

  return (
    <div className="lg:inline-block hidden space-x-3">
      &nbsp;&nbsp;
      {tags.map(tag => (
        <Link key={tag} href={`/tag/${tag}`}>
          <a className="hover:text-blue-900 transition-colors duration-200 text-blue-500 text-xl">#{tag}</a>
        </Link>
      ))}
    </div>
  )
}

const PostItem: React.FC<{ post: Post }> = ({ post }) => (
  <div className="flex flex-row flex-wrap my-1 justify-between">
    <div className="space-x-2">
      <Link href={`/post/${post.title}`} className="cursor-pointer">
        <a className="sm:text-3xl text-2xl font-medium hover:underline hover:underline-offset-auto">{post.title}</a>
      </Link>
      <Tags tags={post.labels} />
    </div>
    <span className="text-xl sm:text-2xl italic font-light self-center">{formatDate(post.created_at)}</span>
  </div>
)

interface BlockProperties {
  year: string
  items: Post[]
}

const PostBlock: React.FC<BlockProperties> = ({ year, items }) => {
  // get year of now
  const now = new Date()
  const currentYear = now.getFullYear()

  // if year is current year, don't show year
  const showYear = year !== currentYear.toString()

  return (
    <div className="flex flex-col my-10">
      {showYear && <div className="sm:text-3xl text-2xl font-medium sm:my-3 my-1 italic text-gray-500 dark:text-gray-100">{year}</div>}
      {items.map(item => (
        <PostItem key={item.id} post={item} />
      ))}
    </div>
  )
}

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
