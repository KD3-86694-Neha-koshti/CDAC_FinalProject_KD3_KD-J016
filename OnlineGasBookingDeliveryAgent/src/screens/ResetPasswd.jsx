import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function RestPassword(){
    const [email,setEmail]=useState('');
    const [newpassword,setNewPassword]=useState('');
    const [newconfirmpassword,setNewConfirmPassword]=useState('')

    const navigate=useNavigate()
    const em="neha@gmail.com"
    const newpass="neha#123"
    const conpass="neha#123"

    const onLogin=()=>{
        if(email.length==0)
        {
            toast.warn('please enter email id')
        }else if(newpass.length==0){
            toast.warn('please enter new password')
        }else if(conpass.length==0){
            toast.warn('please enter conform password')
        }else{
            toast.success('Successfully Updated Password')
            navigate(-1)
        }
    }
    return(
        <div>
             <h2 className='header'>Reset Password</h2>

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
              value={em}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>New Password</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type='password'
              className='form-control'
              placeholder="Enter new password"
              value={newpass}             
            />
          </div>
          <div className='mb-3'>
            <label htmlFor=''>New Password</label>
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              type='password'
              className='form-control'
              placeholder="Enter new password"
              value={newpass}             
            />
          </div>
          <div className='mb-3'>
            {/* <div><Link to='/login'>Forget Password</Link></div> */}
            <button onClick={onLogin} className='btn btn-success mt-3' Link to='/login'>
              Update Password
            </button>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
export default RestPassword