import React, { useState } from 'react';

interface DatePickerProps {
    label: string;
    fieldName: string;
    setData: (value: string, field: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value; // Value is in 'yyyy-mm-dd' format
    if (dateString) {
      setSelectedDate(dateString);
      const date = new Date(dateString);
      if (props.fieldName === 'endDate') {
        date.setDate(date.getDate() + 1);
      }
      const formattedDate = formatDateToString(date);
      props.setData(formattedDate, props.fieldName);
    } else {
      setSelectedDate('');
    }
  };

  const formatDateToString = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
  };

  return (
    <div>
      <label htmlFor="date-picker">{props.label} </label>
      <input 
        id="date-picker" 
        type="date"
        value={selectedDate} 
        onChange={handleDateChange} 
      />
    
    </div>
  );
};

export default DatePicker;
