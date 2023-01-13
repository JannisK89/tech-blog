import { HiMoon, HiSun } from 'react-icons/hi2'
type Props = {
  colorMode: string
  darkModeCheck: () => void
}
const Header = ({ colorMode, darkModeCheck }: Props) => {
  return (
    <header className=" dark:bg-slate-800/50 bg-slate-200/50  dark:text-slate-200 text-slate-800  sticky top-0 py-6 backdrop-blur-md backdrop-saturate-200">
      <div className="flex max-w-4xl mx-auto">
        <h1 className=" w-1/2 text-3xl font-bold">Jannis Tech Blog</h1>
        <nav className="flex justify-end w-1/2 text-lg font-semibold">
          <a className="mx-8 motion-safe:hover:animate-pulse">Posts</a>
          <a className="mr-8 motion-safe:hover:animate-pulse">Contact Me</a>
          <button onClick={darkModeCheck} className="motion-safe:hover:animate-pulse pb-1">
            {colorMode === 'light' ? <HiMoon size={22} /> : <HiSun size={25} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
