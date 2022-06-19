import React from 'react'
import styles from './Scroll.module.scss'

//https://codepen.io/nxworld/pen/OyRrGy

const ScrollButton = () => {
  return (
   <>
    <section id="section01" className="demo">
      <h1>Scroll Down Button #1</h1>
      <a href="#section02"><span></span>Scroll</a>
    </section>
    <section id="section02" className="demo">
      <h1>Scroll Down Button #2</h1>
      <a href="#section03"><span></span>Scroll</a>
    </section>
    <section id="section03" className="demo">
      <h1>Scroll Down Button #3</h1>
      <a href="#section04"><span></span>Scroll</a>
    </section>
    <section id="section04" className="demo">
      <h1>Scroll Down Button #4</h1>
      <a href="#section05"><span></span>Scroll</a>
    </section>
    <section id="section05" className="demo">
      <h1>Scroll Down Button #5</h1>
      <a href="#section06"><span></span>Scroll</a>
    </section>
    <section id="section06" className="demo">
      <h1>Scroll Down Button #6</h1>
      <a href="#section07"><span></span>Scroll</a>
    </section>
    <section id="section07" className="demo">
      <h1>Scroll Down Button #7</h1>
      <a href="#section08"><span></span><span></span><span></span>Scroll</a>
    </section>
    <section id="section08" className="demo">
      <h1>Scroll Down Button #8</h1>
      <a href="#section09"><span></span>Scroll</a>
    </section>
    <section id="section09" className="demo">
      <h1>Scroll Down Button #9</h1>
      <a href="#section10"><span></span>Scroll</a>
    </section>
    <section id="section10" className="demo">
      <h1>Scroll Down Button #10</h1>
      <a href="#thanks"><span></span>Scroll</a>
    </section>
    <section id="thanks">
      <div>
        <h2>Thanks!</h2>
        <p><a href="https://www.nxworld.net/css-scroll-down-button.html" target="_parent">&lt; Back To Article</a></p>
      </div>
    </section>
   </>
  )
}

export default ScrollButton