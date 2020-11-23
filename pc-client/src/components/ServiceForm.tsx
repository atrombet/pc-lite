import React, { ChangeEvent, useState } from 'react';

export const ServiceForm: React.FC = () => {
  const [ title, setTitle ] = useState('');
  const [ datetime, setDatetime ] = useState(new Date());

  const submitForm = () => {
    console.log(title, datetime);
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDatetime(new Date(event.target.value));
  }

  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDatetime(new Date(event.target.value));
  }

  return (
    <form className="serviceForm">
      <h2>Create New Service</h2>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={datetime.toLocaleDateString()} onChange={handleDateChange} />
      </div>
      <div>
        <label>Time</label>
        <input type="time" value={datetime.toLocaleTimeString()} onChange={handleTimeChange} />
      </div>
      <button onClick={submitForm}>Create Service</button>
    </form>
  )
}