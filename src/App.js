// import Home from "./pages/D_Home"
// import NotFound from "./pages/D_404"
// import FicheLogement from "./pages/D_Fiche-Logement"
// import APropos from "./pages/D_A-Propos"

 import { BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
// import {Home,NotFound,FicheLogement,APropos} from "./pages/index";

import Body from "./components/Body"



function App() {
	return (
        <div className='all'>
          <Router>
            <Header/>
            <Body/> 
          </Router> 
          <Footer/>
        </div>

	)
}



export default App