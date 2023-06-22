import {About} from '../datas/About'
import {Dropdown} from '../components/Dropdown/Dropdown'
import {SectionImage} from '../components/_Section1/_Section1.jsx'
import background from '../assets/IMG2.png'
import '../styles/D_A_Propos.scss'

function APropos() {
  return (
    <div className="aboutContainer">
      {SectionImage(background, '')}
      <div className="allAbouts ">
        {About.map((section, index) => {
          return (
            <div key={index} className="dropDowntab">
              {Dropdown(section['title'], section['desciption'])}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default APropos
