
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Review from './components/Review'
import Skill from './components/Skill'
import Work from './components/Work'

//lenis

import { ReactLenis, useLenis } from 'lenis/react';
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

//register gsap plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

  useGSAP(()=>{
    const elements = gsap.utils.toArray(".reveal-up")
    
    elements.forEach((element)=>{
      gsap.to(element, {
        scrollTrigger : {
          start : "-200 bottom",
          end : "bottom 80%",
          trigger : element,
          scrub : true

        },
        y : 0,
        opacity: 1,
        duration : 1,
        ease: "power2.out"

      })
    })
  })

  return (
 <ReactLenis root>
  <Home />
<main>
<Hero />
<About />
<Skill />
<Work />
<Review />
<Contact />

</main>
<Footer />

 </ReactLenis>

  )
}

export default App
