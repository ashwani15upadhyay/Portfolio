import React from 'react'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'

function Home() {
  return (
    <>
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center pt-5">
    {/* <div class="hero-container" data-aos="fade-in"> */}
    <div className="container">

<div className="section-title"> <h1></h1>
      <p>Hey! This side Ashwani Upadhyay, Java Developer<span className="typed" data-typed-items="Developer"></span></p></div>
      
      </div>

    {/* </div> */}
  </section>
   

   <About />
   <Resume />
   <Contact />
    </>
  )
}

export default Home