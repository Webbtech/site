import React from 'react'
import Head from 'next/head'
// import { ThemeProvider } from 'styled-components'

import '../styles/index.css'

import { Center } from '../components/Center'
import { Header } from '../components/Header/Header'
// import { GlobalStyle, theme } from '../shared/theme'

function MainApp({ Component, pageProps }) {
  return (

      <>
      <Head>
        <title>Webbtech - Home</title>
        <meta name="description" content="Webbtech Home Site" />
      </Head>

      <Header />
      <main className='main'>
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      </>

  )
}

export default MainApp