import React, {Component} from 'react';
import Navbar from './NavigationBar';
import style from '../styles/css/styles.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    
    style={
        image: {
          width: '247px',
          height: '147px',
          borderRadius: '30px',
          zIndex: -1,
          position: 'relative',
        },
        listing: {
            width: '250px',
            height: '150px',
            borderRadius: '30px',
            borderStyle: 'solid',
            borderWidth: '2px',
            position:'relative',
            margin:'30px'
        },
        listingTitle:{
            height:'40px',
            width:'247px',
            backgroundColor:'#245cb3',
            verticalAlign: 'baseline',
            zIndex:-1,
            position:'absolute',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            bottom:0,
            left:0,
            textAlign:'center',
            borderTop:'solid'
        },
    };
    
    state = {
		name: "",
		status: "",
		image: "",
		description: ""
    };

    /**
     * Creates and returns a moderator's view of an individual's profile page.
     */
    createModerator() {

    }
    
    /**
     * Creates and returns the user's profile page.
     */
    createOwners() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop: "2%", position: "absolute", textAlign: "center"}}>
                    <img className="profilePicture" src={require("../styles/images/Elijah_Senior.jpg")}/>
                    <div className="profileName">Elijah Cantella</div>
                    <div className="profileStatus">
                        Status: Online
                        <svg height="100%" width="20%">
                            <circle cx="50%" cy="50%" r="10" stroke="black" stroke-width="1" fill="lightgreen"/>
                        </svg>
                    </div>
                    
                    <div style={{height: "50%", width: "100%", textAlign: "right"}}>
                        <p style={{position: "relative", right: "0%", height: "75%", width: "50%",
                            marginLeft: "25%", marginRight: "25%", resize: "none", disabled:'true'}} rows="3"
                                  cols="150" display="auto">
                            I'm a Software Engineer here at RIT. I'm usually in Golisano and I love participating in
                            competitive events.
                        </p>
                    </div>
                    <div style={{display: "inline-flex"}}>
                        <Link to={{ pathname: '/appointments'}} style={this.style.listing}  >
                            <img style={this.style.image} src={require("../styles/images/calendar.jpg")}/>
                            <div className='listingTitle' style={this.style.listingTitle}>
                                <p style={{fontFamily: "Lato", fontSize:"20px", color:'white'}}>My Appointments</p>
                            </div>
                        </Link>

                        <Link to={{ pathname: '/services'}} style={this.style.listing}  >
                            <img style={this.style.image} src={require("../styles/images/service.jpg")}/>
                            <div className='listingTitle' style={this.style.listingTitle}>
                                <p style={{fontFamily: "Lato", fontSize:"20px", color:'white'}}>My Services</p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        );
    }

    /**
     * Creates and returns another person's profile page.
     */
    createGuest() {

    }

    /**
     * Called to determine the nature of the user and returns the profile page.
     */
    createProfilePage() {

    }

    render() {
        return this.createOwners();
    }
}

export default Profile;
