import {BrowserRouter as Router} from "react-router-dom"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
// import {Home,NotFound,FicheLogement,APropos} from "./pages/index";

import Body from "./layout/Body"

function App() {
  return (
    <div className="all">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  )
}

export default App
