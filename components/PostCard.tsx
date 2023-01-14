type Props = {
  data: { [key: string]: string }
}

// TODO make Tag component
const PostCard = ({ data }: Props) => {
  return (
    <div className="flex mx-8 justify-center mb-6 mt-2 p-2 bg-slate-300 dark:bg-slate-800  hover:transition hover:ease-in hover:duration-300 hover:dark:bg-slate-700 hover:bg-zinc-200 cursor-pointer rounded-md shadow-md shadow-slate-500 dark:shadow-lg dark:shadow-black">
      <div className=" rounded overflow-hidden max-w-4xl  ">
        <div className="px-6 py-4">
          <div className="text-xs font-mono my-2 ">
            {data.date} - {data.location}
          </div>
          <div className="text-3xl font-sans font-thin mt-3 mb-5">{data.title}</div>
          <p className="font-serif">{data.description}</p>
        </div>
        <div className="px-6 pb-4 text-md">
          <span className="inline-block rounded-full text-xs mr-2 font-mono font-thin bg-orange-300">
            #Introduction #Typescript #NextJS #MDX
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
