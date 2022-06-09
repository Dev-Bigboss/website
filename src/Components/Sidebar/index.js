import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/logo3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img className='image' src= {logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" className="home-link" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser}  color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedIn.com/in/el90dorado100"
          className='facebook-link'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/el90dorado100"
          className='github-link'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/el90dorado100"
          className='twitter-link'>
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel="noreferrer"
          href="https://wa.link/snczg2"
          className='whatsapp-link'>
          <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
        </a>
      </li>
    </ul>
   </div>
)

export default Sidebar;