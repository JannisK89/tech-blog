import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <>
      <main className="mx-6 md:mx-0">
        <div className="max-w-4xl md:mx-auto md:my-8 my-4 h-full">
          <TypeAnimation
            title="Animated welcome message saying: Hello there, my name is Jannis. Welcome to my tech blog, I hope you enjoy your stay"
            sequence={[
              'Hello there!',
              500,
              'My name is Jannis',
              1500,
              'Welcome to my tech blog',
              1500,
              'I hope you enjoy your stay!',
              3000,
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="md:text-5xl font-mono font-bold"
          />
          <div className="flex font-serif flex-wrap">
            <h3 className="text-2xl md:mt-8 mt-4 font-sans mb-2 w-full font-semibold">About me</h3>
            <div className="flex flex-col md:flex-row ">
              <div className="w-full h-full ml-2 ">
                <Image
                  src="/me.jpeg"
                  alt="Image of me"
                  width={200}
                  height={250}
                  className="rounded-lg mt-2 border-8 border-slate-800 dark:border-slate-200 object-contain"
                />
              </div>
              <div className="flex flex-col text-lg  md:text-base">
                <p className="md:mt-2 mt-4 mx-4">
                  Hi! My name is Jannis <span className="italic">(Pronounced Giannis like the basketball player)</span>{' '}
                  and this here is my little corner of the internet where I write about my thoughts, things that I learn
                  and opinions I have on all things <span className="font-bold font-mono">Web</span>{' '}
                  <span className="font-bold font-mono">Dev</span>, <span className="font-mono font-bold">DevOps</span>{' '}
                  and <span className="font-bold font-mono">Test</span>{' '}
                  <span className="font-bold font-mono"> Automation</span>.
                </p>

                <p className="mt-4 mx-4">
                  I work a lot professionally with Test Automation but my real passion is Web Development, both Frontend
                  and Backend as well as building CI/CD pipelines and working with Cloud. I created this tech blog
                  mostly because I have noticed that the best way for me to really deeply learn new things is to explain
                  them to other people. So to spare my wife from listening to me talk about how Playwright is better
                  than Selenium or how fun NextJS is daily I thought that&apos;ll instead write it on the internet for
                  anyone who want&apos;s to listen.
                </p>
              </div>
            </div>
            <p className="mt-4 mx-4 text-lg md:text-base">
              Other than that I live in Stockholm, Sweden, I am happily married to my beautiful wife and we have a
              daughter on the way. I enjoy watching Formula 1 and Basketball{' '}
              <span className="italic">(mostly NBA)</span>, I like reading about and practicing stoicism and I strive to
              always learn new things wether it is to improve my Web Dev skills or something completely new.
            </p>
            <h3 className="text-2xl mt-8 font-sans mb-4 w-full font-semibold">My preferred tools</h3>
            <ul className="font-bold font-sans mx-4">
              <li className="mb-2">
                Code Editor:{' '}
                <span className="font-mono font-medium ml-1">
                  {' '}
                  Visual Studio Code + Vim extension (full Vim transition probably coming soon).
                </span>
              </li>
              <li className="mb-2">
                Front End: <span className="font-mono font-medium ml-1">Javascript/Typescript, React, NextJS </span>
              </li>
              <li className="mb-2">
                Back End: <span className="font-mono font-medium ml-1">Node.js, Go, C#</span>
              </li>
              <li className="mb-2">
                Testing Framework: <span className="font-mono font-medium ml-1">Playwright</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
