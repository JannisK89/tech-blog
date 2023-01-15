type Props = {
  text: string
  color: string
}

const Tag = ({ text, color }: Props) => {
  return <span className={`${color} rounded p-2 text-black inline-block mr-4`}>{`#${text}`}</span>
}

export default Tag
