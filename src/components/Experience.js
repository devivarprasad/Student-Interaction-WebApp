import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar';
export default function Experience() {
  let navigate=useNavigate();
   const [company_name,setName]=useState("")
   const [experience,setExperience]=useState("")
  const handleExperience=async ()=>{
    let response = await fetch("http://localhost:4000/api/Experience", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Experience_data:[{name:company_name,experience:experience}],
          email:localStorage.getItem("userEmail"),
          order_date: new Date().toDateString()
        })
      });
      console.log("JSON RESPONSE:::::", response.status)
      if (response.status === 200) {
        alert("Experience Successfully Added")
        navigate('/Experience');
      }
    }
  return (
    <div>
      <div><ProfileNavbar /></div>
      <div className="d-flex m-3 justify-content-center ">
        <input className="form-control " type="search" placeholder="Company Name"  aria-label="Search" value={company_name} onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="d-flex m-3 justify-content-center ">
        <input className="form-control " type="search" placeholder="Write Your Experience"  aria-label="Search" value={experience} onChange={(e)=>{setExperience(e.target.value)}} />
      </div>
      
      <div><button className={'btn btn-success justify-center ms-2 m-3'} onClick={handleExperience}>Add Experience</button></div>
      <div><button className={'btn btn-success justify-center ms-2 m-3'} onClick={()=>{navigate('/Skills')}}>Add Skills</button></div>

    </div>  
    
  )
}
