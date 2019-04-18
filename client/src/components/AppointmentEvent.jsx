import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faReply } from '@fortawesome/free-solid-svg-icons'

library.add( faMoneyBill, faReply );

export default class AppointmentEvent extends React.Component {

    constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
	    showModal: false
	}
    }

    toggle(e) {
	e.stopPropagation();
	this.setState(prevState => ({
	    showModal: !prevState.showModal
	}));
    }

    render() {
	return (
	    <div style={{ display: 'inline' }}>
	    	<span style={{ marginRight: '1em' }}>{this.props.event.title}</span>
			<FontAwesomeIcon className='appointmentEventButton' size="lg" icon="reply" style={{marginRight:3}} onClick={this.toggle}/>
	    	<Modal isOpen={this.state.showModal} toggle={this.toggle}>
          	    <ModalHeader toggle={this.toggle}>Request Refund</ModalHeader>
                    <ModalBody>
	    		<b>Reason</b>
                        <textarea rows='4' style={{ width: '100%' }} />
          	    </ModalBody>
          	    <ModalFooter>
            		<Button color="danger" onClick={this.toggle}>Report</Button>{' '}
            		<Button color="secondary" onClick={this.toggle}>Cancel</Button>
          	    </ModalFooter>
        	</Modal>
	    </div>
	)
    }

}
