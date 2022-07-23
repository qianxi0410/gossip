import { useTheme } from 'next-themes'

interface Properties {
  issueNumber: number
}

const Comments: React.FC<Properties> = ({ issueNumber }) => {
  const { theme } = useTheme()

  return (
    <div
      className="mt-5"
      ref={(element) => {
        if (!element || element.childNodes.length > 0) return

        const scriptElement = document.createElement('script')
        scriptElement.src = 'https://utteranc.es/client.js'
        scriptElement.async = true
        scriptElement.crossOrigin = 'anonymous'

        scriptElement.setAttribute('repo', `${process.env.OWNER!}/${process.env.REPO!}`)
        scriptElement.setAttribute('issue-number', `${issueNumber}`)
        scriptElement.setAttribute('theme', theme === 'dark' ? 'photon-dark' : 'github-light')
        element.append(scriptElement)

        return () => {
          scriptElement.firstChild!.remove()
        }
      }}
    />
  )
}

export default Comments
