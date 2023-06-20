
import { ShowCarousel } from "../components/Logement/Details/Carousel";
import { getLogementById } from "../datas/ListeLogement"
import NotFound from "./D_404";
import "../components/Logement/Details/Carousel.scss"
import {ShowInfos}  from "../components/Logement/Details/infos/infos";

// import Collapse from "../components/Collaps/Collaps";

function FicheLogement() {
    const pathArr = document.location.pathname.split('/');
    const id = pathArr[pathArr.length - 1];
    const logement = getLogementById(id);
    if ( logement === undefined){
        return (
            <NotFound />
          )
    }

    console.log(logement)

    return (
        
      <div >
          {ShowCarousel(logement.pictures)}
          {ShowInfos(logement)}
			</div>
      

      
    )
  }
  
  export default FicheLogement