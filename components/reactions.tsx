interface Properties {
  nice: number
  bad: number
  confused: number
  eyes: number
  heart: number
  hooray: number
  laugh: number
  rocket: number
}

const Reactions: React.FC<Properties>
= ({ nice, bad, confused, eyes, heart, hooray, laugh, rocket }) => (
  <div className="flex flex-row justify-start space-x-1 text-sm sm:text-md">
    {nice > 0 && <span className="bg-blue-50 dark:border-white cursor-pointer rounded-2xl p-1 sm:p-2">👍 {nice}</span>}
    {bad > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">👎 {bad}</span>}
    {confused > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">😕 {confused}</span>}
    {eyes > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">👀 {eyes}</span>}
    {heart > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">💜 {heart}</span>}
    {hooray > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">🎉 {hooray}</span>}
    {laugh > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">😂 {laugh}</span>}
    {rocket > 0 && <span className="bg-blue-50 dark:bg-gray-900 cursor-pointer rounded-2xl p-1 sm:p-2">🚀 {rocket}</span>}
  </div>
)

export default Reactions
