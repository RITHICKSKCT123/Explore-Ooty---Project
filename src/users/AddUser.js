import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {


    let navigate =useNavigate()

    const [user,setUser] = useState({
        placeId:"",
        distanceFromMain:"",
        placeName:"",
        speciality:"",
        weather:""
    })


        const onInputChange  =  (e)=>{

            setUser({...user,[e.target.name]:e.target.value})
        }

        const {placeId, distanceFromMain , placeName ,speciality,weather} = user
        const onSubmit= async (e)=>{
            
            e.preventDefault();
            await axios.put("http://localhost:8080/updateHomePage",user);
            navigate("/getHomePage")

        }


   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
          <h2 className="text-center m-4">Add team</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Number" className="form-label">
            PlaceId 
            </label>
            <input 
            type={"Number"}
            className="form-control border-dark shadow"
            placeholder="Enter placeId"
            name="placeId"
            value={placeId}
            onChange={(e)=>onInputChange(e)} >
              
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
               Distance From Main
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="distanceFromMain"
            name="distanceFromMain"
            value={distanceFromMain}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
            PlaceName
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="placeName"
            name="placeName"
            value={placeName}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
               Speciality
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="speciality"
            name="speciality"
            value={speciality}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Weather
            </label>
            <input 
            type={"text"}
            className="form-control border-dark shadow"
            placeholder="Weather"
            name="weather"
            value={weather}
            onChange={(e)=>onInputChange(e)}>
            </input>
          </div>
          
          <button type="submit" className="btn btn-outline-secondary" >Submit</button>
          <Link className="btn btn-outline-danger mx-2" to ="/getHomePage">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
  
}