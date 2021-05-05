import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.jpg';
import './Logo.css';

const Logo=()=>{
     return(
        <div className='ma4 mt0'>
         <Tilt className="Tilt-img br-2 shadow-5" style={{max: 55, height: 150,width:150}}>
          <div className="Tilt-inner pa3" >
           <img style={{paddingTop:'5px'}} src={brain} alt="logo"/>
          </div>
         </Tilt>
        </div>
     );
}

export default Logo;