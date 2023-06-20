import './infos.scss';
import { Dropdown } from '../../../Dropdown/Dropdown';

export function ShowInfos(logement) {

    return(
        
        <div className='infos-appart' >
            <div className='info-section1'>            
                <div >                
                    <h1 className="title">
                        {logement.title}
                    </h1>
                    <p className="location">{logement.location}</p>

                </div>
                

                <div>
                    <div className=''>
                        <div className="Host">
                        <div className='hostName'>{logement.host.name}</div>                      
                        <img className='hostPic' src={logement.host.picture} alt={logement.host.name} />
                        </div>                        
                        
                    </div>
                </div>
            </div>
            <div className='tag-rate'>
                    <div className="tags"> 
                        {logement.tags.map((tag,index)=> {
                        return(<div key={index} className="tag">{tag}</div>)})}
                    </div>

                    <div className="rating">{logement.rating}</div> 
            </div>
            <div>
                <div className="infos-chambre">
                    {Dropdown("Description" , logement.description)}
                    {Dropdown("Equipments" , logement.equipments)}
                       
                </div>


                

            </div>





        </div>

    )

}
