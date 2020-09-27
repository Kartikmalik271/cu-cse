import React from 'react'; 

import unilogo from '../../assets/homepage/img/unilogo.jpg'



const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top:0, behavior:'smooth'});
    };
    return ( 
        <div className="footer pt-5 pb-5">
		<div className="container">
			<div className="row">
             
				<div className="col-12 col-md-7">
                <h1 style={{textShadow:'1px 1px 3px', borderBottom:'3px solid black',textAlign:'center'}}>Address</h1>
                    <div className="row">
                        
                         <img className="col-3 offset-2 mr-0" src={unilogo} style={{width:'80px', height:'150px'}} alt=""/>
                        
                        <div className="col-7 ">
                            <h5>
                                Chandigarh University<br/>
                                Mohali<br/>
                                Punjab<br/>
                                <i className="fa fa-phone "></i>:xxxxxxxxxx<br/>
                                <i className="fa fa-fax "></i>:xxxxxxxxxx<br/>
                                <i className="fa fa-envelope "></i>:xxxxxxxxxx
                            </h5>
                        </div>
                    </div>
                </div>
				<div className="col-sm align-self-center mt-4 pb-4">
					<div style={{textAlign:'center'}}>
						<a ><i className="col-2 fa fa-google-plus fa-lg"></i></a>
						<a ><i className="col-2 fa fa-facebook fa-lg"></i></a>
						<a ><i className="col-2 fa fa-linkedin fa-lg"></i></a>
						<a ><i className="col-2 fa fa-twitter fa-lg"></i></a>
						<a ><i className="col-2 fa fa-youtube fa-lg"></i></a>
						<a ><i className="col-2 fa fa-envelope-o fa-lg"></i></a>
					</div>
				</div>
			</div>
			
		</div>
	</div>
     );
}
 
export default Footer;