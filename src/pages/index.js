import React from "react"
import "./index.css"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../components/navbar/NavBar"
import Home from "../components/home/Home"
import About from "../components/about/About"

function Index() {
  return (
    <div>
      <SEO title="AJ" />
      <NavBar />
      <Home />
      <About />
    </div>
  )
}

export default Index
