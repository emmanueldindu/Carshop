import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({children} :{children: React.ReactNode}) {
  return (
    
    <Html lang="en">
      <Head />
      <body className='relative'>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
