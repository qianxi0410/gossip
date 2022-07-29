import type { HTMLAttributes } from 'react'

const CopyRight: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={className}>
    Powered by <a href="https://github.com/qianxi0410/gossip" className="text-blue-500 hover:underline transition-all">Gossip</a>
  </div>
)

export default CopyRight
