import * as React from "react"

import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
    </div>
  )
}

export default IndexPage
