import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function Register()
{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    

    const navigate=useNavigate()
    const fname="neha";
    const lname="koshti";
    const em="neha@gmail.com";
    const pass="neha@123";
    const conpass="neha@123";
    const pho="9673836769";

    const onSignup=()=>{
        if (firstName.length == 0) {
            toast.warn('Please enter first name')
          } else if (lastName.length == 0) {
            toast.warn('Please enter last name')
          } else if (email.length == 0) {
            toast.warn('Please enter email')
          } else if (phone.length == 0) {
            toast.warn('Please enter phone number')
          } else if (password.length == 0) {
            toast.warn('Please enter password')
          } else if (confirmPassword.length == 0) {
            toast.warn('Please confirm password')
          } else if (password != confirmPassword) {
            toast.warn('Password does not match')
          }else if(phone.length==0){
            toast.warn('Please enter phone number')
          }else if (!/^[0-9]{10}$/) {
            toast.warn('Invalid phone number');
          }
          else{
                toast.success('success');
                navigate(-1);
          }
    }

    return (
        <div>
        <h2 className='header'>Register</h2>
  
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
                placeholder="Enter First Name"
                value={fname}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
                placeholder="Enter Last Name"
                value={lname}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
                placeholder="Enter Email"
                value={em}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Phone Number</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type='tel'
                className='form-control'
                placeholder="Enter Phone Number"
                value={pho}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
                placeholder="Enter Password"
                value={pass}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
                placeholder="Enter Conform password"
                value={conpass}
              />
            </div>
  
            <div className='mb-3'>
              <div>
                Already have an account? <Link to='/login'>Signin here</Link>
              </div>
              <button onClick={onSignup} className='mt-3 btn btn-success'>
                Signup
              </button>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
export default Register