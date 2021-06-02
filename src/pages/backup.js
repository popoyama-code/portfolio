import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Seo from "../components/seo"

import properties from "../components/_settings/_properties"

//import Link from 'gatsby-plugin-transition-link';
//import TransitionLink from 'gatsby-plugin-transition-link'

const IndexPage = ({data}) => {
  const fadeInRefs = React.useRef([])
  fadeInRefs.current = []
  React.useEffect(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      fadeInRefs.current.forEach((e, index) => {
        gsap.fromTo(e, {
          autoAlpha: 0,
          y: 0
        }, {
          duration: 1,
          autoAlpha: 1,
          ease: "power1.inOut",
          y: -50,
          scrollTrigger: {
            once: true,
            trigger: e,
            start: 'top center - 100',
            toggleActions: 'play none none none'
          }
        })
      })
    }, []
  )
  
  return (
    <Layout>
      <Seo title="Home" />
      <h1>MarkDown</h1>
     <AniLink paintDrip hex={properties.COLOR.GRAY_LIGHT} to="work" >
      Go to Page 2
    </AniLink>
  </Layout>
  )
}

export default IndexPage