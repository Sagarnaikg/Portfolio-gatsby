import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="inner-about">
          <div className="content">
            <h3>The ability to create</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="btn-about">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right">
              <StaticImage
                src="../images/fist.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
            </div>
            <div className="bottom-left">
              <StaticImage
                src="../images/flower-mouth.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default About
