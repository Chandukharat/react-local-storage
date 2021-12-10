import React,{useState} from "react";
import './home.css'
import {Link} from 'react-router-dom'

function Info(){
    return(
        <>
        <div className="create">
            <div>Company: Geeksynergy Technologies Pvt Ltd</div>
            <div>Address: Sanjayanagar, Bengaluru-56</div>
            <div>Phone: XXXXXXXXX09</div>
            <div>Email: xxxxxxx@gmail.com</div>
        </div>
        <Link to="/home"><button>Back</button></Link>
        </>
    )
}
export default Info