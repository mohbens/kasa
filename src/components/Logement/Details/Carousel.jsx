
import { useState } from "react"
import "./Carousel.scss"
import ArrowLeft from "../../../assets/arrowLeft"
import ArrowRight from "../../../assets/arrowRight"


export function ShowCarousel(pictures) {
    const [slide, setSlide] = useState(0);
    const nextSlide = ( ) => {     
        var position = (slide === pictures.length -1 ? 0 : slide+1);
        setSlide(position);
                 
    }

        const prevSlide = ( ) => {
            var position = (slide === 0? pictures.length -1 : slide-1);
            setSlide(position);
        }

        const indicator = ( ) =>{
            return(
                <div>
                    {(slide+1)+"/"+pictures.length}
                </div>
            )
        }
      
        return(
        <div className="Carousel">                  
                {/* <div className="carousel-Imgs"> */}
                    {pictures.length>1 && 
                    <div className="arrows" onClick={prevSlide}> <ArrowLeft className="arrow arrowleft" /></div> }
                                

                    {pictures.map((picture,index)=> {
                        return(
                            <img src={picture} alt={picture} key={index} className={slide === index ? "slide slide-image" : "slide slide-hidden slide-image"} />
                            )})}


                    {pictures.length>1 && 
                    <div className="arrows" onClick={nextSlide}><ArrowRight className="arrow arrowright"/></div> }
                    
                {/* </div>                   */}
            <div className="indecator">
            {indicator()}             
            </div>

        </div>



    
    )
}