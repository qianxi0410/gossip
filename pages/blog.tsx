import type { NextPage } from 'next'
import Header from '../components/header'
import Posts from '../components/posts'

const Blog: NextPage = () => (
  <div className="space-y-10">
    <Header />
    <Posts />
  </div>
)

export default Blog
