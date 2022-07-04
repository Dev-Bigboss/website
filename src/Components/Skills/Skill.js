import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faGitAlt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import './Skills.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';


function Skills() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
      return setLetterClass('text-animate-hover')
     }, 3000)
   }, [])

    return (
    <>
    
    <div id="skills" className=" container contain" >
        <div className='text-zone'>
            <h1><AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'S', 'k', 'i ', 'l', 'l','s']}
            idx={15}
            /></h1>
        </div>
    </div> 
    <br/> <br/>
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
    </>
  )
}

export default Skills;