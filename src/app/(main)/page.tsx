import React from 'react'

import Goals from './goals'
import Hero from './hero'
import LocalData from './local-data'
import SmartData from './smart-data'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Hero />
      <LocalData />
      <SmartData />
      <Goals />
    </div>
  )
}

export default Home
