import BannerHome from 'componentes/BannerHome'
import React from 'react'
import '../Home/Home.modules.scss'

export default function Home() {
  return (
    <header className="header">
        <BannerHome />
        <h1>home</h1>
    </header>
  )
}
