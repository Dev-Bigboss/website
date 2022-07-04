import AnimatedLetters from './AnimatedLetters';


import { useState, useEffect } from 'react'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
   }, 3000)
 }, [])
  return (

    
    <>
      <div id="about" className='container contain'>
        <div className='text-zone'>
          <h1 >
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
            />
          </h1>
          <p>Welcome to my hub</p>
          <p>I'm an ambitiuos front-end react developer with my fair bunch of experience in html css and javascript always eager and ready to contribute positively to the tech world and add value to the society</p>
          <p>I'm quite confident, curious and always working on honing my skills to get better and better each blessed day</p>
          <p>I'm interested in sports and obssessed with learning new technology stuffs</p>
          <p>
            If i'm to describe myself in one word, then i would say subtle "I execute my works honestly and cleverly without attracting much attention" 
          </p>
        </div>
        
      </div>
      
      
    </>
  );
}

export default About;