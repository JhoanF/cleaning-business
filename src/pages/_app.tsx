import { ThemeProvider } from 'next-themes'
import '@/css/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider attribute="class" defaultTheme='light'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
