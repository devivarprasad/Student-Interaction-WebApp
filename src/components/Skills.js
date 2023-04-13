import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileNavbar from './ProfileNavbar';
export default function Skills() {
  let navigate=useNavigate();
  const [data,setData] =useState({skill1:"",skill2:"",skill3:"",skill4:"",skill5:""})
   const [experience,setExperience]=useState("")
   let [Skills_data,setSkills]=useState([])
  const fetchSkills=async ()=>{
    await fetch("http://localhost:4000/api/getSkills", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            let response= await res.json();
            await setSkills(response)
        })}
    useEffect(() => {
      fetchSkills()
  }, [])
  console.log(Skills_data[0]);
  const onChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const handleAdd=async ()=>{
    let response = await fetch("http://localhost:4000/api/AddSkills", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Skill_data:[{skill1:data.skill1,skill2:data.skill2,skill3:data.skill3,skill4:data.skill4,skill5:data.skill5}],
          email:localStorage.getItem("userEmail")
        })
      });
      console.log("JSON RESPONSE:::::", response.status)
      if (response.status) {
        alert("Skills Successfully Added")
        navigate('/Experience');
      }
      else{
        alert("Skills Are Allready Exist With This Email")
      }
    }
  return (
    <div>
      <div><ProfileNavbar /></div>
        <div className='container w-100'>
            <div>
            <select className='m-2 h-200   bg-white'  name='skill1'  onChange={onChange}>
                {Array.from(Array(Skills_data.length),(e,i)=>{
                return (
                    <option key={i+1} value={Skills_data[i]}>{Skills_data[i]}</option>
                )
                })}
            </select>
            </div>
            <div>
            <select className='m-2 h-200   bg-white' name='skill2' value={data.name} onChange={onChange}>
                {Array.from(Array(Skills_data.length),(e,i)=>{
                return (
                    <option key={i+1} value={Skills_data[i]}>{Skills_data[i]}</option>
                )
                })}
            </select>
            </div>
            <div>
            <select className='m-2 h-200   bg-white' name='skill3' value={data.name} onChange={onChange}>
                {Array.from(Array(Skills_data.length),(e,i)=>{
                return (
                    <option key={i+1} value={Skills_data[i]}>{Skills_data[i]}</option>
                )
                })}
            </select>
            </div>
            <div>
            <select className='m-2 h-200   bg-white' name='skill4' value={data.name} onChange={onChange}>
                {Array.from(Array(Skills_data.length),(e,i)=>{
                return (
                    <option key={i+1} value={Skills_data[i]}>{Skills_data[i]}</option>
                )
                })}
            </select>
            </div>
            <div>
            <select className='m-2 h-200   bg-white' name='skill5' value={data.name} onChange={onChange}>
                {Array.from(Array(Skills_data.length),(e,i)=>{
                return (
                    <option key={i+1} value={Skills_data[i]}>{Skills_data[i]}</option>
                )
                })}
            </select>
            </div>
        </div>
      <div><button className={'btn btn-success justify-center ms-2'} onClick={handleAdd} >Add</button></div>

    </div>  
    
  )
}
