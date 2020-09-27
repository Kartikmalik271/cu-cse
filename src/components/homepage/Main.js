import React from 'react';
import main_img from '../../assets/homepage/img/OBJECTS.png'
import ClubsModal from './Modal';

const Main = () => {
    return ( 
        <div className=" homepage-main ">
           <div className="col-12" >
                <div className="row justify-content-center align-items-center  ">
                    <div className="homepage-main-heading col-12 col-md-7 mt-5 pt-5 pt-md-0 mt-xl-0  pb-5 mb-md-3">
                        <h1 style={{ textAlign:'center' , fontWeight:'bolder', fontSize:'40px',fontFamily:'cursive', textShadow:'1px 1px 2px black'}}><span style={{fontWeigth:'400'}}>Department of </span><br/>
                                    COMPUTER SCIENCE <br/> & <br/> ENGINEERING
                        </h1>
                        <ClubsModal/>
                    </div>
                    <img className="homepage-main-img col-12 col-md-5 mt-md-4 px-0 mb-4 mb-md-2" style={{margin:'0 auto'}} src={main_img} alt=""/>
                
                <div className="homepage-main-cu">
                    <button className="btn homepage-main-cu-btn-half"
                    style={{margin:'0 auto',
                           textAlign:'center' ,
                           fontWeight:'bolder',
                           fontSize:'40',
                           fontFamily:'cursive',
                           backgroundColor:"rgb(225, 0, 0)",
                           padding:'10px',
                           marginBottom:'-8%',
                           borderRadius:'15px',
                          
                           }}>CHANDIGARH UNIVERISTY</button>
                </div>
                </div>
           </div>
        </div>
     );
}
 
export default Main;