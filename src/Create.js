import React,{useState} from "react";
import {Link} from 'react-router-dom'
import './home.css'

function Create(){
    const [data,setData]=useState({
        username:"",
        password:"",
        email:"",
        phone:"",
        profession:""
    })
    const modifyData=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
   
    return(
        <div className="create">
        <h1>Create Account</h1>
        <input onChange={modifyData} type="text" placeholder="username" name="username"/>
        <input onChange={modifyData} type="password" placeholder="password" name="password"/>
        <input onChange={modifyData} type="email" placeholder="email" name="email"/>
        <input onChange={modifyData} type="number" placeholder="phone" name="phone"/>
        <select onChange={modifyData} name="profession">
            <option value="fd">front end developer</option>
            <option value="bd">back end developer</option>
            <option value="fsd">full stack developer</option>
        </select>
        
        <Link to="/login"><button onClick={()=>{
            localStorage.setItem("userData",JSON.stringify(data))
        }}>Create Account</button></Link>
        </div>
    )
}
export default Create