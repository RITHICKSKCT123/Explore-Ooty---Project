import axios from 'axios'
import './view.css'
import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

import { Link, useParams,useNavigate } from 'react-router-dom'


export default function ViewUser() {

  
    const [user,setUser] = useState({
        placeId:"",
        distanceFromMain:"",
        placeName:"",
        speciality:"",
        weather:""
    })
    const loadUser=async()=>{
      const result = await axios.get(`http://localhost:8080/get/${placeId}`)
      setUser(result.data)
    }

    
    const {placeId} = useParams()
    useEffect(()=>{
      loadUser()
    },[])

    return (
        <div className="view">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow ">
              <h2 className="colour">Place Details</h2>

              <div className="card">
                <div className="card-header">
                  Details of Place:
                  <ul className="list-group list-group-flush">
                    <li className = "list-group-item">
                      <b>PlaceId: </b>
                      {user.placeId}

                    </li>
                    <li className = "list-group-item">
                      <b>distanceFromMain: </b>
                      {user.distanceFromMain}
                    </li>
                    <li className = "list-group-item">
                      <b>PlaceName: </b>
                      {user.placeName}
                    </li>
                    <li className = "list-group-item">
                      <b>Speciality: </b>
                      {user.speciality}
                    </li>
                    <li className = "list-group-item ">
                      <b>Weather: </b>
                      
                      {user.weather}

                    </li>
                  </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/getHomePage"}>
                  Back to Home
              </Link>
            </div>
          </div>
        </div>
    )
}