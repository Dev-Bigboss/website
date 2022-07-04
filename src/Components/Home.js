import React from 'react';
import { useState, useEffect } from 'react';
import {Button } from "react-bootstrap";
import AnimatedLetters from "./AnimatedLetters";


function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'S', 'h', 'e', 'r', 'i', 'f', 'd', 'e', 'e', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e','r' ]

  useEffect(() => {
     setTimeout(() => {
     return setLetterClass('text-animate-hover')
    }, 1000)
  }, [])
  
  return (
    <>
        <div className=" container contain ">
       <div className='texxt'>
         <br/>
         <br/>
         <h1>
         
         <span className={letterClass}>H</span>
         <span className={`${letterClass} _12`}>i,</span> 
         <br/>
         <span className={`${letterClass} _13`}>I</span> 
         <span className={`${letterClass} _14`}>'m</span>  
         <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> 
         <br/>
         <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26} /> 
         </h1>
         
         <h2>Frontend Developer / html css scss javascript / React developer</h2>
         
         <Button href="#contact" className='flat-button' variant="warning">CONTACT ME</Button>{' '} 
       
      
       </div>
      </div> 
    </>
  )
}

export default Home