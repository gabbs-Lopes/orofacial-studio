import React from 'react'
import './BannerHome.modules.scss'
import Carousel from 'componentes/Carousel'
import NavBarHome from 'componentes/NavBarHome'

export default function BannerHome() {
  return (
    <section className="banner">
      <NavBarHome />
      <Carousel />
    </section>
  )
}
