import emailjs from '@emailjs/browser'
import { useRef } from 'react';


import AnimatedLetters from '../AnimatedLetters';
// import './Contact.scss'
import { useState, useEffect } from 'react';

const Contact =() => {

  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
   }, 3000)
 }, [])
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_37zc9lp',
        'template_dvplulr',
        refForm.current,
        'YK9m4_Wa9K_UdNyyX'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }


  return (
    <>
      <div id="contact" className="container contain">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't',  ' ', 'm', 'e']}
            idx={15}
            />
          </h1>
          <p>
            I am open to freelance opportunities. However, if you have any other offer for me, you can reach me through the form below 
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name="user_name" placeholder="Name" required />
                  </li>
                  <li className='half'>
                  <input type="email" name="user_email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder='
                  Message' name='message' required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Sherifdeen Adeleke,
          <br />
          Nigeria,
          <br />
           Abuja, 
            <br/>
          Lugbe,  Kapwa <br />
          <span>el90dorado100@gmail.com</span>
        </div>
        </div>
    </>
  )
}

export default Contact;


