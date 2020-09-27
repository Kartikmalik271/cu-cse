import React from 'react';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

import TeamCard from './TeamCard';
import photo from '../../assets/homepage/img/kartik.jpg'
import photo1 from '../../assets/homepage/img/csquare.jpeg'
import Particles from 'react-particles-js'
const options={
   
    navText:['',''],
    rewindNav:true,
    dots:true,

    responsive:{
        0:{
            items:1,
        },
        630:{
            items:2,
        },
    992:{
        items:5,
    },
    
},
};


const Team = () => {
    return ( 
        <div className="homepage-team col-12 pb-5"style={{borderBottom:'1px solid grey'}}>
            <Particles className="teamsparticle col-11" params={{
                particles:{
                    number:{
                        value:120,
                        density:{
                            enable:true,
                            value_area:1200,
                        }
                    },
                    "color":{
                        "value":"#000000"
                    },
                   
                },
            }}/>
            <h2 className=" col-5 px-5 mt-5 mb-3 pb-2" style={{ textAlign:'center' , textShadow:'1px 1px 3px black'}}>Our Team</h2>
            <div className="col-12 pt-3 pb-3">
            <div className="row justify-content-center">
                <OwlCarousel  {...options} 
                                margin={5}
                                autoplay ={true}
                                loop={true} 
                                
                                autoplayHoverPause={true} 
                                style={{textAlign:'center'}}>  

                    <div className="col-12 item "><TeamCard teamimg={photo}  name=" name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo1} name="name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name=" name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name="name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name=" name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name="name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name=" name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name="name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name=" name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name="name"/></div>
                    <div className="col-12 item"><TeamCard teamimg={photo} name=" name"/></div>

                </OwlCarousel>
            </div>
            </div>

        </div>
     );
}
 
export default Team;