import type { HTMLAttributes } from 'react'

const CopyRight: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={className}>
    <p className="text-gray-800 text-sm sm:text-lg dark:text-gray-500">
      Powered by <a href="https://github.com/qianxi0410/gossip" className="text-blue-500 hover:underline transition-all">Gossip</a>
    </p>
  </div>
)

export default CopyRight
