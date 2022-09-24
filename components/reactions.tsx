
interface Properties {
  nice: number
  bad: number
  confused: number
  eyes: number
  heart: number
  hooray: number
  laugh: number
  rocket: number
  id: number
}

const handleClick = (id: number) => {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  window.open(`https://github.com/${process.env.OWNER!}/${process.env.REPO!}/issues/${id}`, '_blank')
}

const Reactions: React.FC<Properties>
= ({ nice, bad, confused, eyes, heart, hooray, laugh, rocket, id }) => (
  <div className="flex flex-row justify-start md:space-x-3 space-x-1 text-sm sm:text-md">
    {nice > 0 && <span className="bg-blue-50 dark:border-white cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>👍 {nice}</span>}
    {bad > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>👎 {bad}</span>}
    {confused > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>😕 {confused}</span>}
    {eyes > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>👀 {eyes}</span>}
    {heart > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>💜 {heart}</span>}
    {hooray > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>🎉 {hooray}</span>}
    {laugh > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>😂 {laugh}</span>}
    {rocket > 0 && <span className="bg-blue-50 dark:bg-gray-800 cursor-pointer rounded-2xl p-1 sm:p-2" onClick={() => handleClick(id)}>🚀 {rocket}</span>}
  </div>
)

export default Reactions
