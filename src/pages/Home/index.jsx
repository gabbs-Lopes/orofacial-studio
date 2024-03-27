import BannerHome from 'componentes/BannerHome'
import React from 'react'
import '../Home/Home.modules.scss'

export default function Home() {
  return (
    <>
      <header className="header">
          <BannerHome />
      </header>

      <main className='main'>
        <h1>Main</h1>
      </main>

      <footer>
        
      </footer>
    </>
  )
}
