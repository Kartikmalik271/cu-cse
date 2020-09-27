import React from 'react';

import resources from '../../assets/homepage/img/resources.png'

const Resources = () => {
    return ( 
        <div className="col-12">
            <div className="row align-items-center justify-content-center">
              
                <img className="homepage-resources-img col-10 col-md-5" src={resources} alt=""/>
                <div className="homepage-resources-title col-10 mt-5 col-md-6 order-first order-md-last  "style={{textAlign:'center'}}>
                    <h1 className="" style={{fontWeigth:'bolder',fontFamily:'poppins'}}> resources <i className="fa fa-chevron-circle-right"></i></h1>
                </div>
            </div>
        </div>
     );
}
 
export default Resources;