import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate('/');
    }
  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='Input-Box' type="text"
        value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <input className='Input-Box' type="email"
        value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input className='Input-Box' type="password"
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button onClick={collectData} className='appbutton' type='button'>SignUp</button>
    </div>

  )
}

export default Signup