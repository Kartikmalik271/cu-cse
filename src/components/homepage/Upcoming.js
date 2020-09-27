import React from 'react';

import upcoming from '../../assets/homepage/img/upcoming.png'

const Upcoming = () => {
    return ( 
        <div className="col-12">
            <div className="row align-items-center justify-content-center align-items-center">
              
                <img className="homepage-Upcoming-img col-10  col-md-5" src={upcoming} alt=""/>
                <div className="homepage-Upcoming-title col-10 mt-5 col-md-6 order-first order-md-last "style={{textAlign:'center'}}>
                    <h1 className="" style={{fontWeigth:'bolder',fontFamily:'poppins'}}> Upcoming <i className="fa fa-chevron-circle-right"></i></h1>
                </div>
            </div>
        </div>
     );
}
 
export default Upcoming;