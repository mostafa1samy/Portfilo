import './index.scss'
import { Link } from 'react-router-dom'
import logos from '../../assets/images/logo-s.png'
import logosubtitle from '../../assets/images/logo_sub.png'
import logosubtitle1 from '../../assets/images/mos.jpeg'
import { NavLink } from 'react-router-dom'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logos} alt="logoS" />
        <img className="sub-logo" src={logosubtitle1} alt="logosubtitle" />
      </Link>
      <nav>
        <NavLink to="/" exact="true" activeclassname="active">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          exact="true"
          activeclassname="active"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/contact"
          exact="true"
          activeclassname="active"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="
          -blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mostafa-mahmmed-samy-03b04a17b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="
          -blank"
            rel="noreferrer"
            href="https://github.com/mostafa1samy"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="
          -blank"
            rel="noreferrer"
            href="https://www.youtube.com"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="
          -blank"
            rel="noreferrer"
            href="https://www.youtube.com"
          >
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SideBar
