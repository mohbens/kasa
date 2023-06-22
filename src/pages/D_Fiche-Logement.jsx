import {ShowCarousel} from '../components/Logement/Carousel/Carousel'
import {getLogementById} from '../datas/ListeLogement'
import NotFound from './D_404'
import '../components/Logement/Carousel/Carousel.scss'
import {ShowInfos} from '../components/Logement/Details/infos/infos'

function FicheLogement() {
  const pathArr = document.location.pathname.split('/')
  const id = pathArr[pathArr.length - 1]
  const logement = getLogementById(id)
  if (logement === undefined) {
    return <NotFound />
  }

  return (
    <div>
      {ShowCarousel(logement.pictures)}
      {ShowInfos(logement)}
    </div>
  )
}

export default FicheLogement
