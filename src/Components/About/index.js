import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGitAlt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders';
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
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
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
        <div className="stage-cube-cont">
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faNodeJs} color="" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;