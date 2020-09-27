import React from 'react';

const ClubsCard = (props) => {
    return ( 
        
  
        <div className="homepage-teamcard col-12">
        <div className="row  justify-content-center ">
            <img className="homepage-teamcard-image col-8 px-0"style={{}} src={props.clubsimg} alt=""/>
                <div className="homepage-teamcard-content col-12 pt-2">
                    <h2>{props.name}</h2>
                    <p className="col-12 ">
                      {props.details}
                    </p>
                </div>
        </div>
    </div>


     );
}
 
export default ClubsCard;