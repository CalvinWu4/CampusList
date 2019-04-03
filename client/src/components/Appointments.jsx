import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavigationBar';

import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

export default class Appointments extends React.Component {

    render() {
	return (
	    <div>
	        <Navbar/>
	    	<BigCalendar
	    	    localizer={localizer}
	    	    events={[]}
	    	    view="month"
	    	    defaultView="month"
	    	    views={["month"]}
	    	    style={{ height: "90vh" }}
	    	/>
	    </div>
    )}

}
