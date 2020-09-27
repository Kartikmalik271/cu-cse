import React from 'react';
import presenters  from '../../assets/homepage/img/presenters.png'
import csquare from '../../assets/homepage/img/csquare.jpeg'
import andriod from '../../assets/homepage/img/andriod.png'
import web from '../../assets/homepage/img/websparks.png'
import cyber from '../../assets/homepage/img/cyber.png'
import heritage from '../../assets/homepage/img/heritage.png'
import tech from '../../assets/homepage/img/tech.png'
import pioneer from '../../assets/homepage/img/pioneer.png'
import invento from '../../assets/homepage/img/invento.png'

import ClubsCard from './ClubsCard';

const ClubsModal = () => {
    return ( 
        <div className="row justify-content-center">
          <button type="button" className="btn modal-btn-half mt-4 " data-toggle="modal" data-target="#Clubs">Join Clubs ></button>
          
            <div class="modal fade homepage-clubs" id="Clubs" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Clubs</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={presenters}
                                                            name="Presenters Club"
                                                            details= "Club organizes sessions,GDs, Deabye competitions for enhancing presentaion,
                                                                    communication skills and confidence in students."
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={csquare}
                                                            name="C-Square Club"
                                                            details="Club organizes competitons for enhancing students Competitive skills through competions like code tantra etc."
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={pioneer}
                                                            name="Pioneer Club"
                                                            details="Club organizes workshops and expert lectures regarding databases concepts for enhancing students technical concepts for Database management system." 
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={invento}
                                                            name="Invento Club"
                                                            details="Club orgainzes workshops and technical sessions for introducing the new inventions and upcoming technologies in the IT sector." 
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={andriod}
                                                            name="Andriod Hive Club"
                                                            details="Club undertake workshops, competitions and expert sessions to built interest in the students for Andriod development" 
                                                        /> 

                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={web}
                                                            name="Web Sparks Club"
                                                            details="Club orgainzes workshops on various web Technologies and cyber Security on Web Applications Pen-Testing. Various competitions are conducted to briing the best out of students" 
                                                        /> 
                                </div> 
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={heritage}
                                                            name="Heritage Club"
                                                            details="Club organizes social and environmental awareness related events that showcases the diversity of our country." 
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={tech}
                                                            name="Tech A Bode Club"
                                                            details="Club organizes workshops and expert sessions for networking aspirants." 
                                                        /> 
                                </div>
                                <div className="col-12 col-lg-4 mt-4"><ClubsCard 
                                                            clubsimg={cyber}
                                                            name="Cyber Security Club"
                                                            details="Club organizes workshops and seminars on website pen testing with OSWP top 10 vulnerability, Kali Linux OS and shell programming " 
                                                        /> 
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default ClubsModal;