import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

interface Properties {
  issueNumber: number
}

const Comments: React.FC<Properties> = ({ issueNumber }) => {
  const { theme } = useTheme()
  const elementReference = useRef<HTMLDivElement>(null)
  const t = theme === 'dark' ? 'github-dark' : 'github-light'
  const className = '.utterances-frame'

  // first load
  useEffect(() => {
    if (!elementReference.current || process.env.comment !== 'true') return

    const scriptElement = document.createElement('script')
    scriptElement.src = 'https://utteranc.es/client.js'
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.setAttribute('repo', `${process.env.OWNER}/${process.env.REPO}`)
    scriptElement.setAttribute('issue-number', issueNumber.toString())
    scriptElement.setAttribute('theme', t)
    elementReference.current.append(scriptElement)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issueNumber])

  // when theme change
  useEffect(() => {
    if (document.querySelector(className)) {
      const iframe = document.querySelector<HTMLIFrameElement>('.utterances-frame')

      if (!iframe || process.env.comment !== 'true') return

      iframe?.contentWindow?.postMessage({ type: 'set-theme', theme: t }, 'https://utteranc.es')
    }
  }, [t])

  return <div ref={elementReference} />
}

export default Comments
