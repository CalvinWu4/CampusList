import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import style from '../styles/css/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faReply } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';
library.add( faMoneyBill, faReply );

export default class AppointmentEvent extends React.Component {

    constructor(props) {
	super(props);
    this.changeRating=this.changeRating.bind(this);
	this.toggle = this.toggle.bind(this);
	this.toggleNested = this.toggleNested.bind(this);
	this.toggleNestedFeedback = this.toggleNestedFeedback.bind(this);
	this.toggleAll = this.toggleAll.bind(this);
	this.cancelAppointment = this.cancelAppointment.bind(this);
	this.submitFeedback = this.submitFeedback.bind(this);
	this.state = {
	    showModal: false,
		nestedModal: false,
        nestedFeedback: false,
		closeAll: false,
        description:'',
        rating:0,
        feedback:true

	}
    }

    submitFeedback(){
        fetch('http://localhost:5000/api/listings/rating' , {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify({
		listingId: this.props.event.listingId,
                rating: this.state.rating,
                review: this.state.description
            }
            )
        })
            .then(response => {
                // Go home
                this.toggleNestedFeedback();
            })
            .catch(err => { console.log(err) });
    }



	toggleNested() {
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: false
		});
	}
    changeRating( newRating, name ) {
        this.setState({
            rating: newRating
        }, ()=>this.validateFull());

    }
    change = e=> {
        this.setState({
            [e.target.name]: e.target.value
        },()=>this.validateFull());

    };
    validateFull = e=>{
        if (
            this.state.rating===0 || this.state.description==='') {
            this.setState({feedback:true});
        }
        else{
            this.setState({feedback: false});
        }
    }
    toggleNestedFeedback() {
        this.setState({
            nestedFeedback: !this.state.nestedFeedback,
            closeAll: false
        });
        this.setState({feedback:true, description:'', rating:0})
    }
	toggleAll() {
		this.setState({
			nestedModal: false,
            nestedFeedback: false,
			closeAll: true
		});
	}
    toggle(e) {
	if (e) {
	    e.stopPropagation();
	}

	this.setState(prevState => ({
	    showModal: !prevState.showModal
	}));
    }

    cancelAppointment() {
	fetch('http://localhost:5000/api/appointments' , {
            method: "DELETE",
	    headers: {
                'Content-type': 'application/json'
            }, body: JSON.stringify({
		id: this.props.event.listingId,
		date: this.props.event.start
	    })
        })
	.then(response => {
	    // Go to My Appointments
	    window.location.replace("/appointments");
	})
	.catch(err => { console.log(err) });
    }

    componentDidMount() {
    	console.log(this.props.event);
	}

	render() {
	return (
	    <div style={{ display: 'inline' }} >
	    	<div onClick={this.toggle}><span style={{ marginRight: '1em' }} >{this.props.event.title}</span></div>
	    	<Modal isOpen={this.state.showModal} toggle={this.toggle}>
          	    <ModalHeader toggle={this.toggle}>Appointment Details</ModalHeader>
                    <ModalBody>
			<b>Title: </b> {this.props.event.title} <br/>
			<b>Start: </b> {this.props.event.start.toLocaleString()}<br/>
			<b>End: </b>{this.props.event.end.toLocaleString()}<br/>
          	    </ModalBody>
          	    <ModalFooter>
					{this.props.event.isUpcoming ? (
						<Button color="primary" onClick={this.cancelAppointment}>Cancel Appointment</Button>
						):(
						<Button color="primary" onClick={this.toggleNested}>Request Refund</Button>
						)}

						<Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Request Refund</ModalHeader>
                            <ModalBody>
                                <b>Reason</b>
                                <textarea rows='4' style={{ width: '100%' }} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleNested}>Confirm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAll}>Cancel</Button>
                            </ModalFooter>
			            </Modal>
                    {this.props.event.isUpcoming ? (
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    ):(
                        <Button color="secondary"  onClick={this.toggleNestedFeedback}>Leave Feedback</Button>
                    )}
                    <Modal isOpen={this.state.nestedFeedback} toggle={this.toggleNestedFeedback} onClosed={this.state.closeAll ? this.toggle : undefined}>
                        <ModalHeader>Leave Feedback</ModalHeader>
                        <ModalBody>
                            <div style={{textAlign:'center'}}>
                            <StarRatings
                                rating={this.state.rating}
                                starRatedColor="#245CB3"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                starDimension="50px"
                                name='rating'/>
                            </div>
                            <br/>
                            <div style={{marginTop:'20px'}}>
                            <b>Review</b>
                            <textarea rows='4' name='description' style={{ width: '100%' }} onChange={e=>this.change(e)} value={this.state.description}/>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={this.state.feedback} title={this.state.feedback ? 'fill out fields': 'submit feedback'} onClick={this.submitFeedback}>Confirm</Button>{' '}
                            <Button color="secondary" onClick={this.toggleAll}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
          	    </ModalFooter>
        	</Modal>
	    </div>
	)
    }

}
