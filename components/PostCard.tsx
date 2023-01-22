import Link from 'next/link'
import Tag from './Tag'

type Props = {
  data: { [key: string]: string | string[] }
}

const tagColor = new Map<string, string>()
tagColor
  .set('Javascript', 'bg-yellow-400')
  .set('Typescript', 'bg-blue-400')
  .set('React', 'bg-orange-300')
  .set('NextJS', 'bg-teal-300')
  .set('DevOps', 'bg-blue-300')
  .set('Test Automation', 'bg-violet-300')
  .set('Playwright', 'bg-emerald-400')
  .set('Compiler', 'bg-pink-400')

const PostCard = ({ data }: Props) => {
  const tags = typeof data.tags !== 'string' ? data.tags : []
  return (
    <div className="flex mx-8 justify-center mb-6 mt-2 p-2 bg-slate-300 dark:bg-slate-800  hover:transition hover:ease-in hover:duration-300 hover:dark:bg-slate-700 hover:bg-zinc-200 cursor-pointer rounded-md shadow-md shadow-slate-500 dark:shadow-lg dark:shadow-black ">
      <Link href={`\/posts\/${data.url}`}>
        <div className=" rounded overflow-hidden max-w-4xl  ">
          <div className="px-6 py-4">
            <div className="text-xs font-mono my-2 ">
              {data.date} - {data.location}
            </div>
            <div className="text-3xl font-sans font-thin mt-3 mb-5">{data.title}</div>
            <p className="font-serif">{data.description}</p>
          </div>
          <div className="px-6 pb-4 mt-2 text-xs font-mono font-thin">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} color={tagColor.get(tag) ?? 'bg-cyan-300'} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
