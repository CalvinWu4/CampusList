import React from 'react';
import {Container, Button, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';


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
            this.state.listing
        );

    }
}

export default Service;
