import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section style={inter.style} className='bg-black text-white'>
      Hello World
    </section>
  )
}
