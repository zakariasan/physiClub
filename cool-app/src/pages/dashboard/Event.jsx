import * as React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

const localizer = momentLocalizer(moment)
const events = [
    {
      start: new Date(2023, 5, 25, 10, 0), // example start date and time
      end: new Date(2023, 5, 25, 12, 0), // example end date and time
      title: 'Meeting'
    },
	 {
      start: new Date(2023, 6, 26, 9, 0),
		 end : new Date(2023, 6, 25, 9, 0),
      title: 'Meeting 1',
    },
        // Add more events as needed
  ];


export default function Event() {
	return (
		<div>
			<h1>My Planning</h1>
			<Calendar
			      localizer={localizer}
				events={events}
				startAccessor="startDate"
				endAccessor="endDate"
			      titleAccessor="title"
      style={{ height: '100vh' }} // Set a desired height

			/>
		</div>
	);
}
