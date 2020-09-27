import React from 'react';

const TeamCard = (props) => {
    return ( 
        <div className="homepage-teamcard col-12 ">
            <div className="row justify-content-center">
                <img className="homepage-teamcard1-image  mt-2 px-0"style={{height:'100px',width:'100px',borderRadius:'50%'}} src={props.teamimg} alt=""/>
                <div className="homepage-teamcard-content col-12 pt-2">
                    <div className="row justify-content-center">
                      
                        <h2>{props.name}</h2>
                    
                        <p className="col-12 ">Position <br/>QUALIFICATION
                             <br/>Deatils<br/>
                        </p>
                        <h5 className="col-2"><i className="fa fa-instagram "style={{}}/></h5>
                        <h5 className="col-2"><i className="fa fa-facebook "style={{}}/></h5>
                        <h5 className="col-2"><i className="fa fa-linkedin "style={{}}/></h5>
                    </div>
                </div>


            </div>
        </div>
     );
}
 
export default TeamCard;