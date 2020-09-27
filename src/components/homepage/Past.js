import React from 'react';

import past from '../../assets/homepage/img/past.png'

const Past = () => {
    return ( 
        <div className="col-12 "style={{borderBottom:'1px solid grey'}}>
            <div className="row align-items-center justify-content-center">
              
               
                <div className="homepage-past-title  col-10 mt-5 col-md-6 order-first   "style={{textAlign:'center'}}>
                    <h1 className="" style={{fontWeigth:'bolder',fontFamily:'poppins'}}> past <i className="fa fa-chevron-circle-right"></i></h1>
                </div>
                <img className="homepage-past-img col-10 col-md-5" src={past} alt=""/>
            </div>
        </div>
     );
}
 
export default Past;