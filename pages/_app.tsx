import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState('')

  useEffect(() => {
    setColorMode(window.localStorage.getItem('darkMode') ?? 'light')
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
    <div className={colorMode}>
      <div className={'w-full h-full bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100 '}>
        <Header colorMode={colorMode} darkModeCheck={darkModeCheck} />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
