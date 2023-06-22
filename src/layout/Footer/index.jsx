import './style.scss'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import getLogo from '../../assets/logo'

function Footer() {
  return (
    <footer className="Footer">
      <Router>
        <Link className="footerlogo" to="/">
          {getLogo('white', 122)}
        </Link>
        <h1 className="rights">© 2020 Kasa. All rights reserved </h1>
      </Router>
    </footer>
  )
}
export default Footer
