import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    ModalHeader, ModalBody, ModalFooter, Modal
} from 'reactstrap';
import classnames from 'classnames';
import Navbar from './NavigationBar';
import StarRatings from 'react-star-ratings';
import style from '../styles/css/styles.css';
import ModalComponent from "./ModalComponent";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      showModal: false,
      // check the type of your default values set 
      listing: {
        ratings: []
      }
    };
      this.toggle = this.toggle.bind(this);
  }
    toggle(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));

    }
    removeService(){
        //var data = require('../Data/sample');
        //var removeService = this.state.listing['id'];
        //for(var i = 0; i < data.listings.length; i++) {
        //    if(data.listings[i].id===removeService){
        //        data.listings.splice(i, 1);
        //    }
        //}
        //console.log('im here');
        //console.log(data);
        //var fs = require('fs');
        //fs.writeFile('../Data/sample', data, 'utf8');

    }
    /// Checkout liefcycle methods to find besttime to set listing (before render)
    componentWillMount() {
        if (this.props.location.state) {
            // re-write Listing to whatever location.state
            // Proptypes to enforce typing
            this.setState({listing:this.props.location.state})
        }

    }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div style={{display:'flex', flexPosition:'row', width:'50%', marginTop:'4%', marginRight:'auto', marginLeft:'auto'}}>
        <img src={require('../styles/images/'+this.state.listing['picture'])} style={{height:'15em', width:'15em', marginBottom: '2em', marginRight: '5em', border:'solid'}}/>
            <div>
                <h3 style={{color:'gray'}}>{this.state.listing['category']}</h3>
                <h1>{this.state.listing['title']}</h1>
                <StarRatings starDimension="30px"
                        rating={parseFloat(this.state.listing['rating'])}
                         starRatedColor="#245CB3"
                        numberOfStars={5}
                        name='rating'
                             style={{clear:'both', display:'block'}}
                />
                <div style={{display:'flex', flexDirection:'row'}}>
                <h3 style={{position:'relative', top:'10px'}}>{this.state.listing['price']}</h3>
                {this.props.location.parent!=='Services' ? (
                    <ModalComponent state={{title:'Book Appointment', body:<Row id='appointmentsRow' style={{justifyContent:'center'}}>
                        <FormGroup style={{marginRight:'1em'}}  >
                        <Input
                            type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        />
                        </FormGroup>
                        <FormGroup style={{marginLeft:'1em'}}>
                        <Input

                            type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                        />
                        </FormGroup>
                        </Row>, href: '/appointments',buttonColor: 'primary', buttonStyle:{ marginTop:'2%', marginLeft:'1em'}}}/>

                ) : (
                    <div> </div>
                )}
            </div>
            </div>
        </div>
        <Nav tabs style={{width:'50%', marginRight:'auto', marginLeft:'auto'}} >
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={{border:'solid'}}
            >
              Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} style={{border:'solid'}}
            >
              Reviews
            </NavLink>
          </NavItem>

        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{width:'50%', height:'250px',overflow:'auto', overflowX:'hidden', marginRight:'auto', marginLeft:'auto', border:'solid'}}>
          <TabPane tabId="1">
            <Row>
                <p style={{margin:'3%', width: '65%', fontFamily:'Lato', fontSize:'20px'}}>{this.state.listing['description']}</p>
                <img style={{height:'10%', width:'20%', margin:'2.75%'}} src={require("../styles/images/map.png")}/>
            </Row>
          </TabPane>
           <TabPane tabId="2">
            <Row>
              <Col sm="12">
                {this.state.listing.ratings.map((x) => {
                     return (
                    <div style={{margin: '2%'}}>
                        <StarRatings starDimension="30px"
                            rating={parseFloat(x.rating)}
                            starRatedColor="#245CB3"
                            numberOfStars={5}
                            name='rating'
                        />
                        <p style={{marginTop: '2%'}}>{x.review}</p>
                        <hr />
                    </div>)
                })}
              </Col>
            </Row>
          </TabPane>

        </TabContent>

          {this.props.location.parent==='Services' ? (
              <ModalComponent state={{title:'Delete Service', body:'Are you sure you want to delete this service', href: '/services',buttonColor: 'danger', buttonStyle:{ marginLeft:'67%', marginTop:'1%'}}}/>

              ) : (
              <div> </div>
          )}

          </div>
    );
  }
};