import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Signup() {
  const [credentials,setCredentials] =useState({name:"",location:"",email:"",contact:"",password:""})
  let navigate=useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    fetch("http://localhost:4000/api/creatuser", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name:credentials.name,location:credentials.location,email:credentials.email,contact:credentials.contact,password:credentials.password})
    }).then(response => response.json()).then(json => {
      if(json.success){
        alert("Your Account is Successfully Created")
        navigate('/login')
      }
     
      //console.log(global.email_exist)
      else{
        global.email_exist=false;
        alert("Not a Valid Credentials or Entered Email is Allready Exist!!")
      }
      
    })
   
  }

  const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

 
  return(
    <form onSubmit={handlesubmit}> 
    <div><Navbar /></div>
    <div className="wrapper">
        <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" alt=""/>
        </div>
        <div className="text-center m-4 name text-success">
            Student
        </div>
        <div><label htmlFor="exampleInputEmail1" className="form-label m-4">Create Your Account</label></div>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text"  id="userName" placeholder="Name"  name='name' value={credentials.name} onChange={onChange}/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="email" id="userName" placeholder="email" name='email' value={credentials.email} onChange={onChange}/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="contact" id="userName" placeholder="contact" name='contact' value={credentials.contact} onChange={onChange}/>
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input type="password"  id="pwd" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
        </div>
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" id="userName" placeholder="address"  name='location' value={credentials.location} onChange={onChange}/>
        </div>
        <button className="btn mt-3 bg-success">Signup</button>
        {/*<Link to="/login" className="btn mt-3 fs-6 bg-success">Signin</Link>*/}
      </div>
      <div><Footer /></div>
    </form>
  )
}
