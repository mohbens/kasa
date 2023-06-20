import './style.scss'
import {Routes, Route } from 'react-router-dom';
import {NotFound} from "../../pages/index";
import getPages from '../../pages/index';



function Body() {  

  return(
    <div className='body'>
      <Routes>

        {getPages().map((element,index) => {
          return (
            <Route key={index} path={element.path} element={<element.component />} />
            );
        })}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Body