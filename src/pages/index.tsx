import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from './services'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  return (
    <>
      <Hero />
      <Services />
    </>
  )
}

export default Home;