import React from 'react';
import ReactDOM from 'react-dom';

export default class AppointmentEvent extends React.Component {

    render() {
	return (
	    <div style={{ display: 'inline' }}>
	    	<p>{this.props.event.title}</p>
	    </div>
	)
    }

}
