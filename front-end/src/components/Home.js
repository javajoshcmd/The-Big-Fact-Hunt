import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import { response } from 'express';
import "./home.css";


const Home =()=>{

const [usernameReg, setUsernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState('');

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus] = useState('');

Axios.defaults.withCredentials = true;

const register =()=>{
    Axios.post('http://localhost:3001/register', {
        username: usernameReg, 
        password: passwordReg,
    }).then((response) => {
        console.log(response)
    })
}

const login =()=>{
    Axios.post('http://localhost:3001/login', {
        username: username, 
        password: password,
    }).then((response) => {

        if (response.data.message){
            setLoginStatus(response.data.message)
        }else{
            setLoginStatus(response.data[0].User)
        }
        
    })
}

useEffect(()=>{
    Axios.get("http://localhost:3001/login").then((response)=>{
        if (response.data.loggedIn === true)
       setLoginStatus(response.data.user[0].User)
})
}, [])

    
let log = ()=>{
    const x = document.getElementById('top-form');
    const y = document.getElementById('bttm-form');
    const z = document.getElementById('btn');
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px'
    
}

let reg =()=>{
    const x = document.getElementById('top-form');
    const y = document.getElementById('bttm-form');
    const z = document.getElementById('btn');
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px'
}

    return(

        <div className='app'>

        
        <div className='home'>
            <div className='button-box'>
                <div id='btn'></div>
                <button type='button' className='toggle-btn' onClick={log}>Log In</button>
                <button type='button' className='toggle-btn' onClick={reg}>Register</button>
            </div>
            <div id='top-form' className='login'>
                <h1>Login</h1>
                <input type='text' placeholder='Username...'  onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type='text' placeholder='Password...'  onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={login} className='form-btn'>Login</button>
            </div>


            <div id='bttm-form' className='reg'>
                <h1>Registration</h1>
                <label>Username</label>
                <input type='text' onChange={(e)=>{setUsernameReg(e.target.value)}}/>
                <label>Password</label>
                <input type='text' onChange={(e)=>{setPasswordReg(e.target.value)}}/>
                <button onClick={register} className='form-btn'>Register</button>
            </div>

         </div>
        <h1 id='user-name'>{`user:${loginStatus}`}</h1>
        </div>
    )
}

export default Home;