type Props = {
  text: string
  color: string
}

const Tag = ({ text, color }: Props) => {
  return <span className={`${color} rounded p-2 text-black inline-block mr-4 my-2 md:my-0`}>{`#${text}`}</span>
}

export default Tag
