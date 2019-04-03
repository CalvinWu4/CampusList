import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

library.add( faExclamationTriangle );

export default class AppointmentEvent extends React.Component {

    render() {
	return (
	    <div style={{ display: 'inline' }}>
	    	<span style={{ marginRight: '1em' }}>{this.props.event.title}</span>
	    	<FontAwesomeIcon icon="exclamation-triangle" />
	    </div>
	)
    }

}
