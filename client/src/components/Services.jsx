import React from 'react';
import StarRatings from 'react-star-ratings';
import {
    Button,
    Col,
    Collapse,
    Container,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    InputGroup,
    Label,
    Row
} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './NavigationBar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlusCircle);


class Services extends React.Component {

    style={
        image: {
            width: '247px',
            height: '147px',
            borderRadius: '30px',
            zIndex: -1,
            position: 'relative',
        }
        ,
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
        listingText: {
            height:'120px',
            width:'247px',
            backgroundColor:'#ffffff',
            verticalAlign: 'baseline',
            zIndex:-1,
            position:'absolute',
            borderBottomLeftRadius:'30px',
            borderBottomRightRadius:'30px',
            bottom:0,
            left:0,
            textAlign:'center',
            borderTop:'solid',
        },

    };
    state={
        services:{},
        service_ids:[],
    };
    componentWillMount() {
        var data = require('../Data/sample.json'); // forward slashes will depend on the file location
        this.setState({services: data.listings});
        for(var i = 0; i < data.listings.length; i++) {
            this.state.service_ids.push(data.listings[i].id);
        }
    }

    componentDidMount() {

    }

    listing(id){
        var listings={};
        var pic='';
        for(var i = 0; i < this.state.services.length; i++) {
            if (this.state.services[i].id===id){
                listings=this.state.services[i];
                pic=listings['picture'];
            }

        }
        return(
            <Link to={{ pathname: '/service', state:listings }} style={{borderColor:'black !important'}}>
                <div className='listing'style={this.style.listing}  >
                    <img style={this.style.image} src={require("../styles/images/"+listings['picture'] )}/>
                    <div className='listingTitle' style={this.style.listingTitle}>
                        <p style={{fontFamily: "Lato", fontSize:"20px", color:'white'}}>{listings['title']}</p>
                    </div>
                    <div className='listingText' style={this.style.listingText}>
                        <div style={{display:'block', clear:'both'}}>
                            {listings['description']}
                        </div>
                        <div style={{  position:'absolute', marginLeft:'auto', marginRight:'auto', bottom:5, left:22}}>
                            <StarRatings starDimension="30px"
                                         rating={parseFloat(listings['rating'])}
                                         starRatedColor="#245CB3"
                                         numberOfStars={5}
                                         name='rating'
                            />
                        </div>

                    </div>
                </div>
            </Link>
        )
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Container style={{marginTop: 45, marginBottom: 30, paddingLeft:0}}>
                <h2>My Services</h2>

                </Container>
                <Container style={{maxHeight:'65vh', overflow:'auto' , border:'solid',borderColor:'grey'}}>
                    <div style={{display:'inline-block'}}>
                        {this.state.service_ids.map((row,i) => (
                            <div style={{display:'inline-block', marginRight:'45px'}}>
                                {this.listing(row,i)}
                            </div>
                        ))}
                    </div>
                </Container>
                <Container style={{paddingLeft:0, marginTop:10}}>
                    <Button href='/createlisting' color="success" style={{ borderRadius:100,width:'40px', height:'40px', padding:0}}><FontAwesomeIcon icon="plus-circle" style={{width:'35px', height:'37px'}}/></Button>{' '}
                </Container>
            </div>
        )}

}

export default Services;
