import Link from 'next/link'

type ProjectProps = {
  title: string
  url: string
  sourceCodeUrl: string
  description: string
}

export default function Project({
  title,
  url,
  sourceCodeUrl,
  description,
}: ProjectProps) {
  return (
    <li>
      <Link
        className="dark:text-sky-300 dark:hover:text-sky-500 text-gray-800 hover:text-sky-600 hover:underline font-bold font-sans"
        href={url}
        target="_blank"
      >
        <h3 className="text-2xl"> {title} </h3>
      </Link>
      <p className="mt-2">{description}</p>
      <Link href={sourceCodeUrl} target="_blank">
        <p className="text-sm dark:text-sky-500 dark:hover:text-sky-600  text-gray-800 hover:text-sky-600 hover:underline mt-2">
          View Source code
        </p>
      </Link>
    </li>
  )
}
