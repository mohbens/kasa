import "./infos.scss"
import {Dropdown} from "../../../Dropdown/Dropdown"

import Rate from "../../../rate"
export function ShowInfos(logement) {
  return (
    <div className="infos-appart">
      <div className="info-section1">
        <div className="section-title-tags">
          <div>
            <div className="title">{logement.title}</div>
            <div className="location">{logement.location}</div>
          </div>
          <div>
            <div className="tags">
              {logement.tags.map((tag, index) => {
                return (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="hostUser">
          <div className="Host">
            <div className="hostName">{logement.host.name}</div>
            <img
              className="hostPic"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          {Rate(logement.rating)}
        </div>
      </div>

      <div className="info-section2">
        {Dropdown("Description", logement.description)}

        {Dropdown("Equipments", logement.equipments)}
      </div>
    </div>
  )
}
