import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

// function Home() : NextPage = {
const Home: NextPage = () => {
  return (
    <div
      className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] `}
    >
      <Head>
        <title>Home - Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section>
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}
export default Home
