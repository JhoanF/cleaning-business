import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from './services'

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