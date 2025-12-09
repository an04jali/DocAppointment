import React from 'react'
import Header from '../components/Header'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-100 min-h-screen">
      <Header />
      <Services/>
    </div>
  )
}

export default Home
