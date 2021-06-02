import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/heroSection"
import AboutSection from "../components/aboutSection"
import WorkSection from "../components/workSection"
import ContactSection from "../components/contactSection"

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { StaticImage } from "gatsby-plugin-image"

const Index = props => {
  React.useEffect(() => {
    function animateFrom(elem, direction) {
      direction = direction || 1
      var x = 0,
          y = direction * 100
      if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100
        y = 0
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100
        y = 0
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)"
      elem.style.opacity = "0"
      gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 2.5, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
      })
    }
    function hide(elem) {
      gsap.set(elem, {autoAlpha: 0})
    }
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem)
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem) },
        onLeave: function() { hide(elem) }
      })
    })

  }, [])

  return (
    <Layout>
      <Seo title="Portfolio" />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </Layout>
  )
}

export default Index
