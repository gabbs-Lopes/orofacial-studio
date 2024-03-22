import BannerHome from 'componentes/BannerHome'
import React from 'react'
import styles from '../Home/Home.modules.scss'

export default function Home() {
  return (
    <header className="batata">
        <BannerHome />
        <h1>home</h1>
    </header>
  )
}
