import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'


function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    
    const emailID="neha@gmail.com"
    const passwordID="neha@123"

    const navigate=useNavigate()

    const onLogin=(e)=>{
        if (email.length == 0) {
            toast.warn('please enter email')
          }else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) {
            email = 'Invalid email address';
          } 
          else if (password.length == 0) {
            toast.warn('please enter password')
          }else{
            toast.success("welcome to page")
             // go to home screen
            navigate('/home')
          }
    }
    return(
    <div>
      <h2 className='header'>Online Gas Booking</h2>
      <h2 className='header'>Login</h2>
     
      
      <div className="container d-flex justify-content-center align-items-center "> 
        <div className='card p-4 login-card'>
        <div className="text-center mb-4">
            <img src={require('../imagesss/loginlogo.jpg')} width={90} height={60} alt='Logo'
            className='logo'></img>
        </div>
        </div>
        </div>  
        <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='mb-3'>
            <label htmlFor=''>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='form-control'
              placeholder='Enter your Email'
              value={emailID}
             // onChange{(e)=>setEmail(e.target.value)}
              
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='form-control'
              placeholder="Enter your password"
              value={passwordID}
              
            />
          </div>
          {errorMessage && (
              <div className="text-danger mb-3">{errorMessage}</div>
            )}
          <div className='mb-3'>
            <div>
              Don't have an account? <Link to='/register'>Register here</Link>
            </div>
            <br/>
            <div>Forget password ?<Link to='/forgetpasswd'>Forget Password</Link></div>
            <button onClick={onLogin} className='btn btn-success mt-3'nav>
              Login
            </button>
          </div>
        </div>
        <div className='col'></div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <footer className="bg-dark text-white py-3" >
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Gas Booking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
   
    
  )
}

export default Login