import Link from 'next/link'

interface ItemProperties {
  title: string
  created_at: string
  number: string
}

const PostItem: React.FC<ItemProperties> = ({ title, created_at, number }) => (
  <div className="flex flex-row space-y-3 cursor-pointer items-start justify-between">
    <Link href={`/post/${number}`}>
      <a className="text-2xl font-medium hover:text-gray-500 transition-colors">{title}</a>
    </Link>
    <div className="text-xm italic font-light">{created_at}</div>
  </div>
)

interface BlockProperties {
  year: string
  items: ItemProperties[]
}

const PostBlock: React.FC<BlockProperties> = ({ year, items }) => (
  <div className="flex flex-col my-10">
    <div className="text-3xl font-medium my-3 italic text-gray-700">{year}</div>
    {items.map(item => (
      <PostItem
        key={item.title}
        title={item.title}
        created_at={item.created_at}
        number={item.number}
      />
    ))}
  </div>
)

const Posts: React.FC<any> = ({ posts }) => {
  const map = new Map<string, any[]>()
  for (const post of posts) {
    const year = post.created_at.split('-')[0]

    if (!map.has(year)) map.set(year, [])

    map.set(year, [...map.get(year)!, post])
  }

  // iter over map

  return (
    <div>
      <div className="italic font-bold text-3xl mb-3">Posts</div>
      {
        [...map].map(([year, items]) => (
          <PostBlock
            key={year}
            year={year}
            items={items}
          />
        ))
      }
    </div>
  )
}

export default Posts
