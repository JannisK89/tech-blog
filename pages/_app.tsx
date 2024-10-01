import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState('')

  useEffect(() => {
    setColorMode(window.localStorage.getItem('darkMode') ?? 'dark')
  }, [])

  const darkModeCheck = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
      window.localStorage.setItem('darkMode', 'dark')
    } else {
      setColorMode('light')
      window.localStorage.setItem('darkMode', 'light')
    }
  }
  return (
    <>
      <Head>
        <title>Tech Blog & Portfolio by Jannis Karanikis</title>
        <meta
          name="description"
          content="Tech blog by Jannis Karanikis: NextJS, React, Playwright, Javascript, Typescript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={colorMode}>
        <div
          className={
            'w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100 flex flex-col '
          }
        >
          <Header colorMode={colorMode} darkModeCheck={darkModeCheck} />
          <div className="min-h-[calc(100vh-12rem)]">
            <Component {...pageProps} className="flex-1 " />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}
