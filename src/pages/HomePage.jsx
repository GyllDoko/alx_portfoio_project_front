import React from "react"
import { connect } from "react-redux"
import { Hero } from "../components/Hero"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Features from "../components/Features"
import About from "../components/About.jsx"

export const ProductListScreen = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen)
