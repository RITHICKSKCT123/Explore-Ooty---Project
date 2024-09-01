import React from 'react';
import './pykara.css';
import { Link } from 'react-router-dom';
const HorizontalFlip = () => {
  return (
    <div>
      <Link className="buttonbutton" to={"/getHomePage"}>I Experienced</Link>
      <h1 className="pykara"><p style={{ color: 'white' }}>ᴘʏᴋᴀʀᴀ ᴡᴀᴛᴇʀ ꜰᴀʟʟꜱ</p>
</h1>
    
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/52/b2/17/fb-img-1541863354038.jpg?w=1200&h=-1&s=1)' }}>
        <h3 className="text-shadow">Touch</h3>
        </div>
        <div className="back">
          <h2>Day & Timeing</h2>
          <p>Monday 8.30 am - 5.00 pm</p>
          <p>To</p>
          {/* <p>Wednesday 8.30 am - 5.00 pm</p>
          <p>Thursday 8.30 am - 5.00 pm</p>
          <p>Friday 8.30 am - 5.00 pm</p>
          <p>Saturday 8.30 am - 5.00 pm</p> */}
          <p>Sunday 8.30 am - 5.00 pm</p>
        </div>
      </div>
      {" " }+{" "}
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(https://blog.thomascook.in/wp-content/uploads/2014/07/ooty-pykara-lake.jpg)' }}>
        <h3 className="text-shadow">Touch</h3>
        </div>
        <div className="back">
          <h2>Distance from Main</h2>
          <p>5 hr 39 min </p>
          <p>(220.2 km) </p>
          <p>via NH 81 and NH181 ..... </p>

        </div>
      </div>

      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(https://blog.thomascook.in/wp-content/uploads/2014/07/ooty-pykara-lake.jpg)' }}>
        <h3 className="text-shadow">Touch</h3>
        </div>
        <div className="back">
          <h2>Speciality</h2>
          <p>Nature , Climate , Dam and Power Station </p>
        </div>
      </div>
      {" " }+{" "}

      

      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9b/41/39/fb-img-1536802621189.jpg?w=1200&h=-1&s=1)' }}>
        <h3 className="text-shadow">Touch</h3>
        </div>
        <div className="back">
          <h2>Weather</h2>
          <p>Partly Cloudy
20°C°F
Precipitation: 23%
Humidity: 65%
Wind: 11 km/h
Weather
Tuesday, 4:00 pm
Partly Cloudy</p>
        </div>
      </div>
    </div>
  );
};


export default function App() {
  return (
    <div>
      <HorizontalFlip />
      <br />
      <br />
      {/* <VerticalFlip /> */}
    </div>
  );
}
