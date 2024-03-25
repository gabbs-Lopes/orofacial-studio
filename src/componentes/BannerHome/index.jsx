import React from 'react'
import styles from './BannerHome.modules.scss'
import NavBar from 'componentes/NavBar'
import Carousel from 'componentes/Carousel'

export default function BannerHome() {
  return (
    <section className="banner">
      <NavBar />
      <Carousel />
    </section>
  )
}
