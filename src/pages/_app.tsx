import { ThemeProvider } from 'next-themes'
import '@/css/tailwind.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer';
import Container from '@/components/container';

export default function App({ Component, pageProps }: AppProps) {
  const navigation = [
    { link: "/services", text: "Cleaning Services" },
    { link: "/cleaning-process", text: "Our Cleaning Process" },
    { link: "/cleaning-tips", text: "Cleaning Tips" },
    { link: "/contact", text: "Contact Us" },
  ];
  return (
    <ThemeProvider attribute="class" defaultTheme='light'>
      <Navbar navigation={navigation} />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer navigation={navigation} />
    </ThemeProvider>
  )
}
