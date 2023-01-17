import React, { useState } from 'react'
import '../styles/globals.css'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])
  return (
    <>
      <Head>
        <title>Blog For Coder</title>
        <meta name="description" content="Welcome To BlogForCoder.com. We are here you to provide some valuable knowlegde about Web Development which we learn through our mistakes and journey and answer some of your question so you can't face the same difficulty that we have faced in our journey...." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )


}
