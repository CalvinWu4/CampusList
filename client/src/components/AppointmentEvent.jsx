import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';
import style from '../styles/css/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faReply } from '@fortawesome/free-solid-svg-icons'

library.add( faMoneyBill, faReply );

export default class AppointmentEvent extends React.Component {

    constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.toggleNested = this.toggleNested.bind(this);
	this.toggleAll = this.toggleAll.bind(this);
	this.cancelAppointment = this.cancelAppointment.bind(this);
	this.state = {
	    showModal: false,
		nestedModal: false,
		closeAll: false

	}
    }

	toggleNested() {
		this.setState({
			nestedModal: !this.state.nestedModal,
			closeAll: false
		});
	}

	toggleAll() {
		this.setState({
			nestedModal: !this.state.nestedModal,
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
			<b>Start: </b> {this.props.event.end.toLocaleString()}<br/>
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
            		<Button color="secondary" onClick={this.toggle}>Cancel</Button>
          	    </ModalFooter>
        	</Modal>
	    </div>
	)
    }

}
