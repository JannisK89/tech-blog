import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState('light')

  const colorModeCheck = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else setColorMode('light')
  }
  return (
    <div className={colorMode}>
      <div
        className={
          'w-full h-full bg-gray-100 dark:bg-gray-900 text-slate-900 dark:text-slate-100 '
        }
      >
        <button onClick={colorModeCheck}>Test Mode</button>
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
