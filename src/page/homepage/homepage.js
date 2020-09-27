import React from 'react';
import './homepage.css'
import Main from '../../components/homepage/Main';
import Upcoming from '../../components/homepage/Upcoming';
import Events from '../../components/homepage/Events';
import Past from '../../components/homepage/Past';
import Team from '../../components/homepage/Team';
import Resources from '../../components/homepage/resources';
import Footer from '../../components/homepage/footer';



const Homepage = () => {
    return ( 
        <div>
           
            <Main/> 
            <Upcoming/>
            <Events/>
            <Past/> 
            <Team/>
            <Resources/>
            <Footer/>      
            
        </div>
     );
}
 
export default Homepage;