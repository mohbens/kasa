
import "./_Section1.scss"


export function SectionImage (picture , title){

    console.log(picture)
    return(
        
        <div className="_SectionImage" 
       
        style={{ backgroundImage: `url(${picture})` }}

        // style={{"background-image: url('../../assets/IMG.png')"}}
        >
            {title}
            
          </div >
    )


}