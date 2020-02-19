import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

const DateTimePickerComponent = ({ date, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    onChange(newDate);
  };
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          label="Delivery Time:"
          disablePast
          ampm={false}
          openTo="hours"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DateTimePickerComponent;
