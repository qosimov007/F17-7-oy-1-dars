import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
<div className="navbar">
  <div className="logo">
    <span>Alifreza.</span>
  </div>




  <div className="nav">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </div>


  <button className='Contact'>Contact</button>
</div>


<div className="hero">
  <h2>Hello, I’m Alif Reza</h2>
<h1>Product Designer  </h1>
<p>I’m from Singapore and I have been working as a Product Designer for <br /> more than 7 years. I’ve worked for a Hanziree company Pabloo as a <br /> Product Designer and Front-end Developer for 3 years.</p>

<div className="button-grup">
  <button className='email'>Email Me</button>
  <button className='yuklash'>Download</button>
</div>

</div>

<div className="main">

<div className="text">
  <h1>7+ years experience <br />
working</h1>

<div className="line">
<img src="src/img/Frame 7.png" alt=""/>
<p>Discover the best services I offer, designed to <br /> ensure the success of your project.</p>
</div>

</div>



</div>


<div className="blok">

<div className="item">


<img src="src/img/icon-1.svg" alt=""/>
<h1>Product design</h1>
<p>I offer innovative and attention-grabbing <br /> product design services. From initial <br /> ideation to implementation.</p>

</div>

<div className="item">


<img src="src/img/icon-2.svg" alt=""/>
<h1>Frontend develop</h1>
<p>Specialize in responsive and interactive <br />  front-end development. With a deep <br /> understanding of HTML, CSS, and JS.</p>

</div>

<div className="item">


<img src="src/img/icon-3.svg" alt=""/>
<h1> Brand strategy</h1>
<p>I help design strong and captivating <br /> brand strategies. Through  <br /> thorough research and market analysis.</p>

</div>

</div>


<div className="Section-work">
<div className="l">
<div className="Soz">
<img src="src/img/Group 1 (1).png" alt=""/>
<h1>Some of my favorite projects.</h1>
</div>
 <button className='Project'>View All Project</button>
</div>


<div className="Card-con">
<div className="card">
<img width={550} height={368} src="src/img/alana.png" alt=""/>
<h1>Alana - live data app</h1>
<p><img src="src/img/Frame 16.png" alt=""/></p>
</div>
<div className="card">
<img width={550} height={368} src="src/img/wohoo.png" alt=""/>
<h1>Wohoo - weather appp</h1>
<p><img src="src/img/Frame 16.png" alt=""/></p>
</div>

</div>
<div className="Card-con">
<div className="card">
<img width={550} height={368} src="src/img/pagee.png" alt=""/>
<h1>Pagee - real estate UI kit</h1>
<p><img src="src/img/Frame 16.png" alt=""/></p>
</div>


<div className="card">
<img width={550} height={368} src="src/img/keikoko.png"alt=""/>
<h1>Keikoko - agency web</h1>
<p><img src="src/img/Frame 16.png" alt=""/></p>
</div>

</div>


</div>

<div className="Section1">
<img width={191} height={24} src="src/img/Frame 7 (1).png" alt=""/>
<h1>My happy clients</h1>
<p>"Wow is all i can say! Alifreza did an absolute fenominal job from <br /> start to finish. He created exactly what I wanted and exceeded <br /> my expectation. Highly recommend alifreza!"</p>

<div className="img-g">
<img  width={50} height={50} src="src/img/monalisa.png" alt=""/>
<h1>Monalisa Nona</h1>
<p>Project Manager, Ruber</p>
</div>
</div>

<div className="section2">
<div className="tex">
  <h1>Have any project in mind ?</h1>
  <p>Feel free to contact me or just say friendly hello!</p>
</div>
<button className='btn'>Contact Me</button>

</div>





     </div>
    </>
  )
}

export default App
