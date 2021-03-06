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
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.book = this.book.bind(this);
    this.removeService = this.removeService.bind(this);
    this.dateChanged = this.dateChanged.bind(this);
      this.timeChanged = this.timeChanged.bind(this);
    this.state = {
        props :{
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        },
      activeTab: '1',
      showModal: false,
      bookingDate: '2019-05-02T17:19:39.514Z',
        bookingTime: '17:19:39',

        // check the type of your default values set
      listing: {
        ratings: []
      },
        apiKey:''
    };
  }
    toggle(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));

    }


    removeService() {
	fetch('http://localhost:5000/api/listings/' + this.state.listing['id'], {
	    method: 'DELETE'
	})
	.then(response => {
	    // Go back to My Services
	    window.location.replace("/services");
	})
	.catch(err => { console.log(err) });
    }

    book() {
	fetch('http://localhost:5000/api/appointments' , {
            method: "POST",
	    headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify({
		id: this.state.listing.id,
		date: new Date(this.state.bookingDate)
	    })
        })
	.then(response => {
	    // Go to My Appointments
	    window.location.replace("/appointments");
	})
	.catch(err => { console.log(err) });
    }

    timeChanged(e){
        this.state.bookingTime = e.target.value;
        const timeString = this.state.bookingTime;
        const date = new Date(this.state.bookingDate)
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Jan is 0, dec is 11
        const day = date.getDate();
        const dateString = '' + year + '-' + month + '-' + day;
        const combined = new Date(dateString + ' ' + timeString);
        this.state.bookingDate = (new Date(combined));
        console.log(this.state.bookingDate);

    }
    dateChanged(e) {
	    this.state.bookingDate = e.target.value;
        const timeString = this.state.bookingTime;
        const date = new Date(this.state.bookingDate)
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Jan is 0, dec is 11
        const day = date.getDate() + 1;
        const dateString = '' + year + '-' + month + '-' + day;
        const combined = new Date(dateString + ' ' + timeString);
        this.state.bookingDate = (new Date(combined));
        console.log(this.state.bookingDate);
    }

    /// Checkout liefcycle methods to find besttime to set listing (before render)
    componentWillMount() {
        if (this.props.location.state) {
            // re-write Listing to whatever location.state
            // Proptypes to enforce typing
            this.setState({listing:this.props.location.state})
        }
        fetch('http://localhost:5000/api/credentials')
            .then(response => response.json())
            .then(data => this.setState( {apiKey: data['googleMaps']}));

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
                {parseFloat(this.state.listing['ratings'].length) > 0 ? (
                <StarRatings starDimension="30px"
                        rating={parseFloat(this.state.listing['rating'])}
                         starRatedColor="#245CB3"
                        numberOfStars={5}
                        name='rating'
                             style={{clear:'both', display:'block'}}
                />):(<h5 style={{marginBottom: 0}}>No Ratings</h5>)}
                <h3 style={{position:'relative', marginTop:'0.5rem'}}>{this.state.listing['price']}</h3>
                {this.props.location.parent!=='Services' ? (
                    <ModalComponent state={{title:'Book Appointment', body:<Row id='appointmentsRow' style={{justifyContent:'center'}}>
                        <FormGroup style={{marginRight:'1em'}}  >
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            onChange={ e => this.dateChanged(e) }
                        />
                        </FormGroup>
                        <FormGroup style={{marginLeft:'1em'}}>
                        <Input
                            type="time"
                            name="time"
                            id="exampleTime"
                            placeholder="time placeholder"
                            onChange={ e => this.timeChanged(e) }
                        />
                        </FormGroup>
                        </Row>, onClick: this.book,buttonColor: 'primary'}}/>
                ) : ('')}
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
            {parseFloat(this.state.listing['ratings'].length) > 0 ? (
                <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }} style={{border:'solid'}}
            >
              Ratings
            </NavLink>
          </NavItem>):('')}

        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{width:'50%', height:'250px',overflow:'auto', overflowX:'hidden', marginRight:'auto', marginLeft:'auto', border:'solid'}}>
          <TabPane tabId="1">
            <Row>
                <p style={{margin:'3%', width: '65%', fontFamily:'Lato', fontSize:'20px', display:'inline-block'}}>{this.state.listing['description']}</p>
                <div style={{ height: '28vh', width: '25%', float:'right', display:'inline-block', marginTop:'30px'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:this.state.apiKey }}
                        defaultCenter={this.state.props.center}
                        defaultZoom={this.state.props.zoom}
                    >
                        <AnyReactComponent
                            lat={100.0846}
                            lng={200.6743}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
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
              <ModalComponent state={{title:'Delete Service', body:'Are you sure you want to delete this service', onClick: this.removeService, buttonColor: 'danger', buttonStyle:{ marginLeft:'67%', marginTop:'1%'}}}/>

              ) : (
              <div> </div>
          )}

          </div>
    );
  }
};
