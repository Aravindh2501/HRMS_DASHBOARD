// Calendar.jsx

import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const pastelColors = ["#b8a9c9", "#a0c1b8", "#f0c987", "#b5d8eb", "#e2b6cf"];

const initialEvents = [
  {
    title: "Birthday Party",
    start: new Date(2023, 4, 20, 10, 0),
    end: new Date(2023, 4, 20, 12, 0),
  },
  {
    title: "Sharing Meeting",
    start: new Date(2023, 4, 21, 14, 0),
    end: new Date(2023, 4, 21, 16, 0),
  },
];

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);

  const addMoreEvents = () => {
    const newEvents = [
      ...events,
      {
        title: "Call for Sharing",
        start: new Date(2023, 4, 22, 9, 0),
        end: new Date(2023, 4, 22, 11, 0),
      },
      {
        title: "Date with Sharing",
        start: new Date(2023, 4, 23, 13, 0),
        end: new Date(2023, 4, 23, 15, 0),
      },
      {
        title: "Another Event",
        start: new Date(2023, 4, 24, 11, 0),
        end: new Date(2023, 4, 24, 13, 0),
      },
      {
        title: "Important Meeting",
        start: new Date(2023, 4, 25, 16, 0),
        end: new Date(2023, 4, 25, 18, 0),
      },
      {
        title: "Team Lunch",
        start: new Date(2023, 4, 26, 10, 0),
        end: new Date(2023, 4, 26, 12, 0),
      },
    ];

    setEvents(newEvents);
  };

  return (
    <div className="card">
      <h3 style={{ marginBottom: "8px" }}>Event Calendar</h3>

      <BigCalendar
        localizer={localizer}
        events={events.map((event, index) => ({
          ...event,
          backgroundColor: pastelColors[index % pastelColors.length],
          textColor: "black", // Optionally set text color
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: "100%" }}
      />
    </div>
  );
};

export default Calendar;
