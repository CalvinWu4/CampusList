import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './NavigationBar';
import AppointmentEvent from './AppointmentEvent';

import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import $ from 'jquery';

const localizer = BigCalendar.momentLocalizer(moment)

export default class Appointments extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    cal_events: []
	};
    }

    componentWillMount() {
		fetch('http://localhost:5000/api/listings')
	.then(response => response.json())
	.then(data => this.setAppointments( data ));
    }

    componentDidMount(){
    	// var events = $(".rbc-event");
    	// events.forEach(){
    	// 	console.log(event)
		// }
	}

    setAppointments(data) {
	var events = [];
	for (var i = 0; i < data.listings.length; i++) {
	    var listing = data.listings[i];
	    console.log(listing);
	    for (var j = 0; j < listing.appointments.length; j++) {
		var startDate = new Date(listing.appointments[j]);
		events.push({
		    title: listing.title,
		    start: startDate,
		    end: new Date(startDate.getTime() + 1800000),
		    isUpcoming: startDate > new Date(),
		    listingId: listing.id
		});
	    }
	}
	this.setState({ cal_events: events });
    }

    render() {
	return (

		<div>
	        <Navbar/>
	        <h1 style={{fontFamily: "Lato", color: "#245CB3", textAlign: "center", marginTop: "1%", marginBottom: "1%"}}>
                    My Appointments
                </h1>
	    	<BigCalendar
	    	    localizer={localizer}
	    	    events={this.state.cal_events}
	    	    view="month"
	    	    defaultView="month"
	    	    views={["month"]}
	    	    style={{ height: "80vh" }}
	    	    components={{ event: AppointmentEvent }}
				// eventPropGetter={event => ({className: 'category-' + event.category.toLowerCase()})}
				// events={events}
				eventPropGetter={
					(event, start, end, isSelected) => {
						let newStyle = {
							backgroundColor: "#b3e1f7",
							color: 'rgba(32,33,36,0.38)',
							borderRadius: "0px",
							border: "none"
						};

						if (event.isUpcoming){
							newStyle.backgroundColor = "#245CB3"
							newStyle.color = "white"
						}

						return {
							className: "",
							style: newStyle
						};
					}
				}

			/>
	    </div>
        )
    }

}
