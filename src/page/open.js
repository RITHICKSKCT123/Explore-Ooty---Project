import React, { useEffect, useState } from 'react'
import axios from"axios";
import { Link, useParams } from 'react-router-dom';
export default function Home() {

    const [user,setUser]=useState([])

    useEffect(()=>
    {
        loadUsers(); 
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/getHomePage");
        setUser(result.data);
    };


const {id} =useParams()

    const deleteTeam = async(placeId)=>{
       await axios.delete(`http://localhost:8080/deleteHomePage/${placeId}`)
      loadUsers()
  }

  return (
      <div className='container'>
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/getHomePage"}>BEST EXPERIENCE</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="btn btn-outline-light" to = "/post">ADD EXPERIENCE</Link>
            </div>
          </nav>
          </div>
              <div className='py-4'>
              <table className="table border dark shadow">
            <thead>
              <tr>
                <th scope="col">placeId</th>
                <th scope="col">distanceFromMain</th>
                <th scope="col">placeName</th>
                <th scope="col">Speciality</th>
                <th scope="col">weather</th>
                <th scope="col" >
                    {"  "}Operations Done
                    </th>
              </tr>
            </thead>
            <tbody>
              {
                  user.map((user,index)=>(
                      <tr>
                <th scope="row" key={index}>{index+1}</th>
                
                <td>{user.distanceFromMain}</td>
                <td>{user.placeName}</td>
                <td>{user.speciality}</td>
                <td>{user.weather}</td>
                <td>
                  <Link className="btn btn-success mx-2" to={`/get/${user.placeId}`}>VIEW</Link>
                  <Link className="btn btn-primary mx-2" to={`/editing`}>EDIT</Link> 
                  <button className="btn btn-danger mx-2" onClick={()=>deleteTeam(user.placeId)}>DELETE</button>

                </td>
              </tr>
              
                  ))
              }
            </tbody>
          </table>
              </div>
    </div>
  )
};