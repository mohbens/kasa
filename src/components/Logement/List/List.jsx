import {ListeLogement} from "../../../datas/ListeLogement"
import {Thumb} from "./Thumb/Thumb"
import "./List.scss"

export function List() {
  return (
    <div className="listThumb">
      {ListeLogement.map((element) => {
        return Thumb(element.cover, element.title, element.id)
      })}
    </div>
  )
}
