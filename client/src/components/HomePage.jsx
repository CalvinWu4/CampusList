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
    Label, ModalFooter,
    Row
} from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import SideNav from './SideNavigation';
import Navbar from './NavigationBar';
import $ from 'jquery';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import navBar from "./Services";

class HomePage extends React.Component {

    style={
        image: {
          width: '247px',
          height: '147px',
          borderRadius: '30px',
          zIndex: -1,
          position: 'absolute',
          left: 0,
          bottom: 0
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
      searchText: "",
    };

    componentWillMount() {
        fetch('http://localhost:5000/api/listings')
        .then(response => response.json())
        .then(data => this.setListings( data ));
    }

    componentDidMount() {
        $(function () {

            var $sidebar = $("#sideNav"),
                $window = $(window),
                navBarHeight = $(".navBar")[0].offsetHeight;

            $window.scroll(function () {
                if ($window.scrollTop() > navBarHeight) {
                    $sidebar.stop().animate({
                        marginTop: 0
                    }, 0);
                }
                else {
                    $sidebar.stop().animate({
                        marginTop: navBarHeight - $window.scrollTop()
                    }, 0);
                }
            });
            // Set sidebar to be expanded by default
            $("#sideNav > button").click();
        });
    }

    setListings(data) {
	for(var i = 0; i < data.listings.length; i++) {
            this.state.service_ids.push(data.listings[i].id)
    }

	this.setState({services: data.listings});
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
            <Link to={{ pathname: '/service', state:listings, parent:'HomePage' }} style={{borderColor:'black !important'}}>
            <div className='listing'style={this.style.listing}  >
                <img style={this.style.image} src={require("../styles/images/"+listings['picture'] )}/>
                <div className='listingTitle' style={this.style.listingTitle}>
                    <p style={{fontFamily: "Lato", fontSize:"20px", color:'white'}}>{listings['title']}</p>
                </div>
                <div className='listingText' style={this.style.listingText}>
                    <div style={{display:'block', clear:'both'}}>
                    {listings['description']}
                    </div>
                        {parseFloat(listings['ratings'].length) > 0 ? (
                            <div style={{position:'absolute', marginLeft:'auto', marginRight:'auto', bottom:5, left:22}}>
                                <StarRatings starDimension="30px"
                                rating={parseFloat(listings['rating'])}
                                starRatedColor="#245CB3"
                                numberOfStars={5}
                                name='rating'
                                />
                            </div>
                        ):(
                            <div style={{position:'absolute', marginLeft:'auto', marginRight:'auto', bottom:5, left:'33.33%'}}>
                                <label style={{left:'33.33%'}}>No Ratings</label>
                            </div>
                        )}
                </div>
            </div>
            </Link>
        )
    }

    render() {
        return (
            <div>
            <Navbar/>
                <SideNav style={{display:'flex'}}/>
                <Container id="mainContainer" style={{display:'flex', flexDirection:'column'}}>

                <Container style={{marginTop: '3%'}}>

                    <Row form >
                        <Col md={12}>
                            <FormGroup>
                                <Input type='text' name='search' id='search' placeholder='Search listings' value={this.state.searchText}
                                    onChange={event => {
                                        this.setState({searchText: event.target.value})
                                        $('.listingTitle').each(function () {
                                            let listingTitle = $(this)[0].innerText.toLowerCase()
                                            let searchText = $("#search").val().toLowerCase();
                                            if (!listingTitle.includes(searchText)) {
                                                $(this).parent().parent().parent().hide();
                                            }
                                            else{
                                                $(this).parent().parent().parent().show();
                                            }
                                            if($('#services').children(':visible').length === 0) {
                                                // action when all are hidden
                                                $('#noResults').show();
                                            }
                                            else{
                                                $('#noResults').hide();
                                            }
                                        });
                                    }}/>
                            </FormGroup>
                        </Col>

                    </Row>

                </Container>
                <Container >
                    <div id='services' style={{display:'flex', flexWrap:'wrap', textAlign:'center'}}>
                        {this.state.service_ids.map((row,i) => (
                            <div style={{display:'flex', width:'33.33%', justifyContent:'center'}}>
                                {this.listing(row,i)}
                            </div>
                        ))}
                        <h2 id='noResults' style={{display:'none'}}>No results</h2>
                    </div>
                </Container>
                </Container>
            </div>
        )}

}

export default HomePage;
