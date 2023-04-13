import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { Badge } from 'react-bootstrap';
//import Modal from '../Modal';
//import Cart from '../screens/Cart';
//import { useCart, useDispatchCart } from './ContextReducer';
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid ">
            <div className="nav-item m-3 ">
                <Link className="navbar-brand fs-1 fst-italic mr-5" to="/">MNNITIAN</Link> 
                <Link className=" btn-success  text-white m-3 btn-lg " to="/About">ABOUT</Link>
                <Link className=" btn-success  text-white m-3 btn-lg " to="/Experience">EXPERIENCE</Link>
                <Link className=" btn-success  text-white m-3 btn-lg" to="/Cpi">CPI</Link>
                <Link className=" btn-success  text-white m-3 btn-lg " to="/Attendance">ATTENDANCE</Link>
                <Link className=" btn-success  text-white m-3 btn-lg " to="/Resources">RESOURCES</Link>
            </div>
        </div>
    </nav>
  </div>
  )
}
