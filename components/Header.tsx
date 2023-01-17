import Link from 'next/link'
import { HiMoon, HiSun } from 'react-icons/hi2'
type Props = {
  colorMode: string
  darkModeCheck: () => void
}
const Header = ({ colorMode, darkModeCheck }: Props) => {
  return (
    <header className=" dark:bg-slate-800/30 bg-slate-200/30 dark:text-slate-200 text-slate-800 sticky top-0 py-4 backdrop-blur-md backdrop-saturate-200">
      <div className="flex max-w-4xl mx-auto justify-between">
        <Link href="/">
          <h1 className="invisible md:visible w-0 md:w-1/2 text-xl font-bold">JannisKaranikis.dev</h1>
        </Link>
        <nav className="flex justify-center md:justify-end w-full md:w-1/2 text-2xl md:text-lg font-semibold">
          <Link href="/" className="md:invisible mr-8 motion-safe:hover:animate-pulse">
            Home
          </Link>
          <Link href="/posts" className="md:mx-8 mr-8 motion-safe:hover:animate-pulse">
            Posts
          </Link>
          <button
            title="Dark mode toggle button"
            onClick={darkModeCheck}
            className="motion-safe:hover:animate-pulse md:pb-1 pt-1"
          >
            {colorMode === 'light' ? <HiMoon size={22} /> : <HiSun size={25} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
