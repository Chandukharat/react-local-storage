import React,{useState} from "react";
import './home.css'

function Login(){
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const modifyData=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const verify=()=>{
        let localData=localStorage.getItem("userData")
        localData=JSON.parse(localData)
        if(data.username===localData.username && data.password===localData.password){
            window.location="/home"
        }
        else{
            alert("Invalid Credentials")
        }
    }
    return(
        <div className="create">
        <h1>Login</h1>
        <input onChange={modifyData} type="text" placeholder="username" name="username"/>
        <input onChange={modifyData} type="password" placeholder="password" name="password"/>
        <button onClick={verify}>Log in</button>
        </div>
    )
}
export default Login