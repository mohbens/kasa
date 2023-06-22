import {
  // BrowserRouter as Router
  // ,
  Link,
} from "react-router-dom"
import "./style.scss"
import getPages from "../../pages"
import getLogo from "../../assets/logo"

function Header() {
  return (
    <div className="header">
      {getLogo("#FF6060", 211)}

      <nav className="Navbar">
        {getPages()
          .filter((element) => element.nav !== undefined)
          .map((element, index) => {
            return (
              <Link key={index} className="NavText" to={element.path}>
                {element.label}
              </Link>
            )
          })}
      </nav>
    </div>
  )
}

export default Header
