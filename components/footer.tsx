import Github from './icons/github'
import Mail from './icons/mail'
import RSS from './icons/rss'
import Twitter from './icons/twitter'

const Footer = () => (
  <footer className="container mx-auto text-center text-gray-700 dark:text-gray-400">
    <div className="flex flex-row justify-center mb-5 space-x-5">
      <RSS width="1.8em" height="1.8em" />
      {process.env.mail && <Mail width="1.8em" height="1.8em" />}
      {process.env.twitter && <Twitter width="1.8em" height="1.8em" />}
      <Github width="1.8em" height="1.8em" />
    </div>
    <div className="mb-10 font-en">
      ©{new Date().getFullYear()}. All rights reserved by <a href={`https://github.com/${process.env.OWNER}`} className="text-blue-500 hover:text-blue-900 transition-colors duration-300">{process.env.OWNER}</a>.
        Powered by <a href="https://github.com/qianxi0410/gossip" className="text-blue-500 hover:text-blue-900 transition-colors duration-300">Gossip</a>.
    </div>
  </footer>
)

export default Footer
