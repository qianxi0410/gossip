import Markdown from '../../components/markdown'

import Link from 'next/link'

import type { NextPage } from 'next'

const markdown = `
# im the tittle

## When should I use this?

There are other ways to use markdown in React out there so why use this one?
The two main reasons are that they often rely on dangerouslySetInnerHTML or
have bugs with how they handle markdown.
react-markdown uses a syntax tree to build the virtual dom which allows for
updating only the changing DOM instead of completely overwriting.
react-markdown is 100% CommonMark compliant and has plugins to support other
syntax extensions (such as GFM).

These features are supported because we use [unified][], specifically [remark][]
for markdown and [rehype][] for HTML, which are popular tools to transform
content with plugins.

This package focusses on making it easy for beginners to safely use markdown in
React.
When you’re familiar with unified, you can use a modern hooks based alternative
[react-remark][react-remark] or [rehype-react][rehype-react] manually.
If you instead want to use JavaScript and JSX *inside* markdown files, use
[MDX][].

### uriTransformer

Our default URL transform, which you can overwrite (see props above).
It’s given a URL and cleans it, by allowing only http: https:, mailto:,
and tel: URLs, absolute paths (/example.png), and hashes (#some-place).

See the [source code here][uri].

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

Lists

* [x] todo
* [x] done

A table:

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

wqewqewqe
\`\`\`go
func main() {
  var a = 2   var a = 2   var a = 2  var a = 2  var a = 2   var a = 2
  b := 3

  fmt.Println(a, b)
}
\`\`\`
213213231

This ~is not~ strikethrough, but ~~this is~~!
`

const PostDetail: NextPage = () => (
  <div className="my-20">
    <div className="flex flex-col items-start mb-10">
      <div className="text-4xl font-bold">
      this is the article title
      </div>
      <div className="text-xl">
        <span>q1anx1</span> / <span>2021.05.03</span> / <span>2022.07.03</span>
      </div>
    </div>

    <Markdown className="text-2xl font-normal">
      {markdown}
    </Markdown>

    <div>
      <Link href="/blog">
        <a className="flex flex-row justify-end text-2xl text-gray-500 hover:text-gray-700 transition-colors">cd ..</a>
      </Link>
    </div>
  </div>
)

export default PostDetail
