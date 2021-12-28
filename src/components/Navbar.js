import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className="navbar">
           <div className="logo">
               <Link to="/">camGears</Link>
           </div>
           <div className="searchbox d-flex">
           <Form.Control type="text" placeholder="Search Product" />
           <Button variant="primary" type="submit">
                Search
            </Button>
           </div>
           <div className="navbar-end">
               <Link className="all-products-btn" to="#">All Products</Link>
               <Link className="user-icon" to="#"><FaUserAlt /></Link>
               <Link className="cart-icon" to="#"><FaShoppingCart /></Link>
           </div>
        </div>
    )
}

export default Navbar
