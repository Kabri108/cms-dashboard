'use client';

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { calendarEvents } from '@/lib/data';

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handelOnChange = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: '98%' }}
      onView={handelOnChange}
      min={new Date(2026, 1, 0, 8, 0, 0)}
      max={new Date(2026, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
