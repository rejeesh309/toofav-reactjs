import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import '@/styles/layout.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400', });

export default function App({ Component, pageProps }) {
  return(
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}
