/* eslint-disable jsx-a11y/heading-has-content */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'

import remarkGfm from 'remark-gfm'

import type { SpecialComponents } from 'react-markdown/lib/ast-to-react'
import type { NormalComponents } from 'react-markdown/lib/complex-types'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'

const components: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  h1: properties => <h1 {...properties} className="sm:text-3xl text-2xl font-bold my-5" />,
  h2: properties => <h2 {...properties} className="sm:text-2xl text-xl font-bold my-4" />,
  h3: properties => <h3 {...properties} className="sm:text-xl text-lg font-bold my-3" />,
  h4: properties => <h4 {...properties} className="sm:text-xl text-lg font-bold my-3" />,
  h5: properties => <h5 {...properties} className="sm:text-xl text-lg font-bold my-2" />,
  h6: properties => <h6 {...properties} className="sm:text-xl text-lg font-bold my-2" />,
  p: properties => <p {...properties} className="sm:text-xl text-lg my-4" />,
  a: properties => <a {...properties} className="text-blue-500 hover:text-blue-800 transition-colors" />,
  strong: properties => <strong {...properties} className="font-bold" />,
  em: properties => <em {...properties} className="font-italic" />,
  blockquote: properties => <blockquote {...properties} className="border-l-4 border-gray-300 bg-green-50 py-1 px-10" />,
  ul: properties => <ul {...properties} className="sm:text-xl text-lg pl-5" />,
  ol: properties => <ol {...properties} className="sm:text-xl text-lg list-decimal pl-5" />,
  li: properties => <li {...properties} className="sm:text-xl text-lg my-2" />,
  table: properties => <table {...properties} className="sm:w-11/12 w-full text-lg border-b-1 bg-gray-50  mx-auto px-2 my-3" />,
  thead: properties => <thead {...properties} className="bg-gray-100" />,
  tbody: properties => <tbody {...properties} className="bg-white text-center" />,
  tr: properties => <tr {...properties} className="border-b-2 border-gray-100" />,
  del: properties => <del {...properties} className="text-red-500" />,
  code({ inline, className, children, ...properties }) {
    const match = /language-(\w+)/.exec(className || '')
    return (!inline && match)
      ? (
        <SyntaxHighlighter
          showLineNumbers
          style={dracula as any}
          customStyle={{
            fontSize: '1rem',
            fontFamily: 'FiraCode Nerd Font; monospace',
          }}
          language={match[1]}
          PreTag="div"
          {...properties}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>)
      : (
        <code className="bg-green-100" {...properties}>
          {children}
        </code>)
  },
}

const Markdown: React.FC<ReactMarkdownOptions> = properties => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={
      components
    }
    {...properties}
  />
)

export default Markdown
