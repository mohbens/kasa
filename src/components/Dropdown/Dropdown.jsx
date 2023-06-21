import ArrowDown from "../arrows/arrowDown"
// import ArrowUp from "../../assets/arrowUp"
import React,{ useState } from "react"


import "./Dropdown.scss"


export function Dropdown(title , details){
    
    const [dropDownVisible,setDropDownVisible] = useState(false)

    const showContent= () =>{
        setDropDownVisible(!dropDownVisible)
        console.log(dropDownVisible)
    }
     var classN = (dropDownVisible) ? "rotate": "" ; 
        return(

        <div className={"Dropdown "+title}>
            <div className="dropDownTitleDiv"  onClick={showContent} >
                <div className='dropdown-title' >{title}</div>
                
                {/* <ArrowUp className="arrow arrowUp" /> */}

                
                <ArrowDown className={classN}/>
                
                {/* {ArrowDown()} */}
            </div>
            {dropDownVisible &&
                <div className="dropdown-infos">
                                        
                    {
                        Array.isArray(details)
                        ? details.map((element,index) => {
                            return (
                                <div key={index}>
                                 {element} <br/>
                                </div>
                             
                              );
                          })
                        : details    
                    }
                    
                    </div>

            }
        </div>  

)
    }