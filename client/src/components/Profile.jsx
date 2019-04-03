import React, {Component} from 'react';
import Navbar from './NavigationBar';
import style from '../styles/css/styles.css';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    
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
                <center style={{marginTop: "5%", position: "absolute"}}>
                    <img className="profilePicture" src={require("../styles/images/Elijah_Senior.jpg")}/>
                    <div className="profileName">Elijah Cantella</div>
                    <div className="profileStatus">Online</div>
                    <div style={{position: "absolute", marginTop: "2%", height: "30%", width: "100%"}}>
                        <textarea style={{position: "relative", right: "0%", height: "100%", width: "80%", marginLeft: "10%", marginRight: "10%"}} rows="3" cols="150" display="auto" marginLeft="auto" marginRight="auto"></textarea>
                        <Button style={{float: "left", position: "absolute", top: "120%", right: "7%", marginLeft: "10%", marginRight: "10%"}} href="/" color="secondary" size="lg" className='landing-button'>Cancel</Button>
                        <Button style={{float: "left", position: "absolute", top: "120%", right: "0%", marginLeft: "10%", marginRight: "10%"}} href="/" color="primary" size="lg" className='landing-button'>Save</Button>
                    </div>
                </center>
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
