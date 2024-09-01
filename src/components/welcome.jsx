import React from "react";
import './welcome.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ComponentName = () => {

  const navigate=useNavigate();
  const handleClick=(event)=>{

    event.preventDefault();
    navigate("/pykara");
  }

  return (
    
    <div className="container text-center">
      <h1 className="f"> Explore OOTY the{' '}
        <span className="a">H</span><span className="b">i</span><span className="c">l</span><span className="d">l</span><span className="e">s</span >
        <span className="a">Q</span><span className="b">u</span><span className="c">e</span><span className="d">e</span><span className="e">n</span>
      </h1>
      <br></br>
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit" 
            onClick={handleClick}>Pykara!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Doddabetta Peak!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Botanical Gardens!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Kalhatty Waterfalls!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Needle ViewPoint!</button></a>{" "}
      <br>
      
      </br><br></br><br></br><div>
      <a className=" rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Elk Hill!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Ooty Boat House!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Emerald Lake!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">The Tea Museum!</button></a>{" "}
      <a className="rainbow rainbow-1"><button className="rainbow rainbow-1" type="submit">Ketti Valley View Point!</button></a>{" "}
      </div>

      <div className="follow">
        <a className="rainbow-4" href="https://ootytourism.co.in/sightseeing-places-to-visit-in-ooty">Follow me on ooty Tourism</a>
      </div>
    </div>
  );
};

export default ComponentName;
