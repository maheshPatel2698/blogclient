import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )


}
