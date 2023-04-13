import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import ProfileNavbar from '../components/ProfileNavbar'

export default  function Profile() {
    let [data,setData]=useState([])
    const fetchMyOrder = async () => {
        await fetch("http://localhost:4000/api/getUserDetails", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response= await res.json()
            await setData([response.name,response.location,response.contact])
        })}
        console.log(data)
        useEffect(() => {
            fetchMyOrder()
        }, [])
    return (
        <div>
        <div><ProfileNavbar /></div>
        <div className="wrapper ">
            <div className="logo ">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt=""/>
            </div>
            <div className='d-flex'>
              <div><label htmlFor="exampleInputEmail1" className="form-label m-2 mt-4 text-success">Name :</label></div>
              <div className="form-label m-1 mt-4">{data[0]}</div>
            </div>
            <div className='d-flex'>
              <div><label htmlFor="exampleInputEmail1" className="form-label m-2 mt-4 text-success">Email:</label></div>
              <div className="form-label mt-4">{localStorage.getItem('userEmail')}</div>
            </div>
            <div className='d-flex'>
              <div><label htmlFor="exampleInputEmail1" className="form-label m-2 mt-4 text-success">Contact:</label></div>
              <div className="form-label mt-4">{data[2]}</div>
            </div>
            <div className='d-flex'>
              <div><label htmlFor="exampleInputEmail1" className="form-label m-2 mt-4 text-success">location : </label></div>
              <div className="form-label m-1 mt-4">{data[1]}</div>
            </div>
        </div>
        <div><Footer /></div>
        </div>
        
    )
}
