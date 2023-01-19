import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" dark:bg-slate-800/40 bg-slate-200/80  dark:text-slate-200 text-slate-800  bottom-0 py-6 mt-10 flex justify-center ">
      <div className="flex flex-col justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="text-sm md:text-md md:text-lg mb-2 mx-6 md:mx-0 md:mb-0 font-medium ">
            Thank you for reading! You can also find me here:
          </div>
          <ul className="flex">
            <li className="ml-2">
              <a
                href="https://www.linkedin.com/in/jannis-karanikis-58248a179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin title="LinkedIn icon" size={26} />
              </a>
            </li>
            <li className="ml-2">
              <a href="https://github.com/JannisK89" target="_blank" rel="noopener noreferrer">
                <FaGithub title="Github icon" size={26} />
              </a>
            </li>
            <li className="ml-3">
              <a href="mailto:Jannis.Karanikis@gmail.com">
                <FaEnvelope title="Email icon" size={26} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <small className="text-[10px] mt-1 pt-2 italic">© Jannis Karanikis 2023-present</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
