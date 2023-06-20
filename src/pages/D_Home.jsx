import { List } from "../components/Logement/List/List"
import {SectionImage} from  "../components/_Section1/_Section1.jsx"
import background from "../assets/IMG.png"

function Home() {
    return (
      <div>          

         { SectionImage(background,"Chez vous, partout et ailleurs")}
          
          <div className="List">
            <List />

          </div>
      </div>
    )
  }
  
  export default Home