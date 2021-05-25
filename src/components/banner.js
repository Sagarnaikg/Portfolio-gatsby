import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">Olademeji Odunsi</div>
          <div className="side-image left">
            <StaticImage
              src="../images/diamonds.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
          </div>
          <div className="main-image">
            <StaticImage
              src="../images/poppin-shades.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
          </div>
          <div className="side-image right">
            <StaticImage
              src="../images/sexy-orange.png"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A Gatsby astronaut"
            />
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>

      <div className="fixed-misc">Visual artist and Photographer</div>
    </div>
  )
}

export default Banner
