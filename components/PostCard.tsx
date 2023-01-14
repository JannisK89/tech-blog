type Props = {
  data: { [key: string]: string }
}

const PostCard = ({ data }: Props) => {
  return (
    <div className="flex justify-center mb-2 mt-4 hover:transition hover:ease-in hover:duration-300 hover:dark:bg-slate-800 hover:bg-slate-300 cursor-pointer rounded-lg">
      <div className=" rounded overflow-hidden max-w-4xl  ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
          <p className="">{data.description}</p>
        </div>
        <div className="px-6 pb-4">
          <span className="inline-block rounded-full px-3text-sm font-semibold mr-2">#photography</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
