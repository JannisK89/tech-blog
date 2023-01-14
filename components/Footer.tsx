import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" dark:bg-slate-800/40 bg-slate-200/80  dark:text-slate-200 text-slate-800  bottom-0 py-2 mt-10 flex justify-center ">
      <div className="flex flex-col">
        <div className="flex">
          <div className="text-md font-medium">Thank you for reading! You can also find me here:</div>
          <ul className="flex">
            <li className="ml-1 pt-1">
              <a
                href="https://www.linkedin.com/in/jannis-karanikis-58248a179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin title="LinkedIn icon" size={22} />
              </a>
            </li>
            <li className="mx-1 pt-1">
              <a href="https://github.com/JannisK89" target="_blank" rel="noopener noreferrer">
                <FaGithub title="Github icon" size={22} />
              </a>
            </li>
            <li className="mx-1 pt-1">
              <a href="mailto:Jannis.Karanikis@gmail.com">
                <FaEnvelope title="Email icon" size={22} />
              </a>
            </li>
          </ul>
        </div>
        <small className="text-[10px] mt-1 italic">© Jannis Karanikis 2023-present</small>
      </div>
    </footer>
  )
}

export default Footer
