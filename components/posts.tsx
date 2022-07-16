
interface ItemProperties {
  title: string
  date?: string
}

const PostItem: React.FC<ItemProperties> = ({ title, date }) => (
  <div className="flex flex-row space-y-1 cursor-pointer items-center justify-between">
    <div className="text-2xl font-medium hover:text-gray-500 transition-colors">{title}</div>
    <div className="text-xm italic font-light">{date}</div>
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
      <PostItem key={item.title} title={item.title} date={item.date} />
    ))}
  </div>
)

const Posts = () => {
  const posts = [{
    id: 1,
    title: 'rust in action',
    date: '2020-01-01',
    content: 'y vegetable exploded (我 菜 爆 了)',
    tags: ['我', '菜', '爆', '了'],
  }, {
    id: 2,
    title: 'my vegetable exploded (我 菜 爆 了)',
    date: '2020-01-01',
    content: 'my vegetable exploded (我 菜 爆 了)',
    tags: ['我', '菜', '爆', '了'],
  }]

  const map = new Map<string, Array<ItemProperties>>()

  map.set('2020', posts)
  map.set('2021', posts)

  // iter over map

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
