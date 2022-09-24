/* eslint-disable @typescript-eslint/indent */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'

import type { AnchorHTMLAttributes, BlockquoteHTMLAttributes, DelHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes, TableHTMLAttributes } from 'react'

import type { CodeComponent, HeadingComponent, LiComponent, OrderedListComponent, SpecialComponents, TableCellComponent, UnorderedListComponent } from 'react-markdown/lib/ast-to-react'

import type { NormalComponents, ReactMarkdownProps } from 'react-markdown/lib/complex-types'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'

const Hx: HeadingComponent = ({ level, children }) => {
  switch (level) {
  case 1:
    return <h1 className="sm:text-4xl text-3xl mb-4 mt-12 dark:text-gray-300">{children}</h1>
  case 2:
    return <h2 className="sm:text-4xl text-3xl mb-4 mt-12 dark:text-gray-300">{children}</h2>
  case 3:
    return <h3 className="sm:text-2xl text-xl my-8 dark:text-gray-300">{children}</h3>
  case 4:
    return <h4 className="sm:text-2xl text-xl my-8 dark:text-gray-300">{children}</h4>
  case 5:
    return <h5 className="sm:text-2xl text-xl my-8 dark:text-gray-300">{children}</h5>
  case 6:
    return <h6 className="sm:text-2xl text-xl my-8 dark:text-gray-300">{children}</h6>
  default:
    return <p>error</p>
  }
}

const Code: CodeComponent = ({ inline, className, children, ...properties }) => {
  const match = /language-(\w+)/.exec(className || '') || ['', 'shell']
  return (!inline)
    ? (
      <SyntaxHighlighter
        showLineNumbers
        style={dracula as any}
        codeTagProps={{
          className: 'font-en text-md',
        }}
        language={match[1]}
        PreTag="div"
        {...properties}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    )
    : (
      <code className="text-gray-600 dark:text-white" {...properties}>
      `{children}`
      </code>
    )
}

const Li: LiComponent = ({ checked, children }) => {
  // ordered represents the order of the list item
  if (checked !== null) {
    return (
      <li className="list-none">
        {children}
      </li>
    )
  }
  return (
    <li className="ml-2">
      {children}
    </li>
  )
}

const Ol: OrderedListComponent = ({ children, ...properties }) => (
  <ol {...properties} className="sm:text-2xl text-xl my-4 list-decimal pl-10 dark:text-gray-300">{children}</ol>
)

const Ul: UnorderedListComponent = ({ children, ...properties }) => (
  <ul {...properties} className="sm:text-xl text-lg list-disc pl-5 dark:text-gray-300">{children}</ul>
)

const Del: React.FC<Pick<DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>, 'key' | keyof DelHTMLAttributes<HTMLModElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <del {...properties} className="dark:text-gray-400">{children}</del>
)

const Em: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'key' | keyof HTMLAttributes<HTMLElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <em {...properties} className="italic dark:text-gray-50">{children}</em>
)

const P: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, 'key' | keyof HTMLAttributes<HTMLParagraphElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <p {...properties} className="sm:text-2xl text-xl mt-4 dark:text-gray-300">{children}</p>
)

const A: React.FC<Pick<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'key' | keyof AnchorHTMLAttributes<HTMLAnchorElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <a {...properties} className="text-blue-500 hover:text-blue-800 transition-colors duration-200">{children}</a>
)

const Strong: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'key' | keyof HTMLAttributes<HTMLElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <strong {...properties} className="font-bold dark:text-gray-100">{children}</strong>
)

const BlockQuote: React.FC<Pick<DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, 'key' | keyof BlockquoteHTMLAttributes<HTMLQuoteElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <blockquote {...properties} className="border-l-4 pl-4 border-gray-300 dark:border-gray-600 rounded-l-md my-6">{children}</blockquote>
)

const Hr: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>, 'key' | keyof HTMLAttributes<HTMLHRElement>> & ReactMarkdownProps> = ({ ...properties }) => (
  <hr {...properties} className="border-gray-300 dark:border-gray-400 dark:border-dashed" />
)

const Img: React.FC<Pick<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'key' | keyof ImgHTMLAttributes<HTMLImageElement>> & ReactMarkdownProps> = ({ src, title, alt }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src!} className="w-11/12 mx-auto rounded-lg shadow-xl" loading="lazy" alt={alt} title={title} />
)

const Table: React.FC< Pick<DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, 'key' | keyof TableHTMLAttributes<HTMLTableElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <table {...properties} className="sm:w-11/12 w-full text-lg mx-auto px-2 my-3 dark:text-gray-300">{children}</table>
)

const THead: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, 'key' | keyof HTMLAttributes<HTMLTableSectionElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <thead {...properties} className="font-bold border-solid bg-gray-100 dark:bg-gray-900">{children}</thead>
)

const Tbody: React.FC<Pick<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, 'key' | keyof HTMLAttributes<HTMLTableSectionElement>> & ReactMarkdownProps> = ({ children, ...properties }) => (
  <tbody {...properties} className="text-center">{children}</tbody>
)

const Td: TableCellComponent = ({ children }) => <td className="border-solid border-x-2 border-y-2 dark:border-gray-900">{children}</td>

const Th: TableCellComponent = ({ children }) => <th className="border-solid border-x-2 border-y-2 dark:border-gray-900">{children}</th>

const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  /* headings */
  h1: Hx,
  h2: Hx,
  h3: Hx,
  h4: Hx,
  h5: Hx,
  h6: Hx,

  /* code block */
  code: Code,

  /* list */
  li: Li,
  ol: Ol,
  ul: Ul,

  /* table */
  table: Table,
  thead: THead,
  tbody: Tbody,
  td: Td,
  th: Th,

  /* normal */
  del: Del,
  em: Em,
  p: P,
  a: A,
  strong: Strong,
  blockquote: BlockQuote,
  hr: Hr,

  /* img */
  img: Img,
}

const Markdown: React.FC<ReactMarkdownOptions> = properties => (
  <ReactMarkdown
    remarkPlugins={[
      remarkGfm,
      [remarkGithub, {
        repository: `${process.env.OWNER!}/${process.env.REPO!}`,
      }]]}
    rehypePlugins={[rehypeRaw]}
    components={
      components
    }
    {...properties}
  />
)

export default Markdown
