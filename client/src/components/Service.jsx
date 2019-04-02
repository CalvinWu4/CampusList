import React from 'react';
import {Container, Button, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Navbar from './NavigationBar';


class Service extends React.Component {
    state={
        listing:""
    };
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({listing:this.props.location.state});
        }
    }

    render(){
        return(
            <div>
                <Navbar/>
                <div>
                    <p>{this.state.listing['category']}</p>
                    <p>{this.state.listing['title']}</p>
                    <p>{this.state.listing['price']}</p>
                    <p>{this.state.listing['rating']}</p>
                </div>
                <div>
                    <div>
                        <p>Description</p>
                    </div>
                    <div>
                        <p>Reviews</p>
                    </div>
                    <div>
                        <p>Appointments</p>
                    </div>

                </div>
            </div>
        );

    }
}

export default Service;
