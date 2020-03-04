import React, { useState, useEffect } from 'react';
import './App.css';
import car from './car.png'
const axios = require('axios');

function App() {

  const [immediate, setImmediate] = useState('immediate')
  const [scheduled, setScheduled] = useState('scheduled')
  const [timestamp, setTimestamp] = useState('timestamp')

  const getDetails = () => {
 
    axios.get('http://localhost:8100/events/stats')
      .then(json => {
        // console.log(json.data)
        setImmediate(json.data.num_immediate_requests)
        setScheduled(json.data.num_scheduled_requests)
        setTimestamp(json.data.updated_timestamp)
      })
  }


  useEffect(() => {
    setInterval(getDetails, 2000)
  })

  return (
    <div class="App">
      <img src={car} alt="Car" />

        <p>Immediate Requests: {immediate}</p>
        <p>Scheduled Requests: {scheduled}</p>
        <p>Last Updated: {timestamp}</p>
    </div>
  );
}

export default App;
