import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'

function UpdateProfile(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address,setAddress]=useState('')

    const fnmae="neha"
    const lname="koshti"
    const em="nehakoshti@gmail.com"
    const pass="neha123"
    const confpass="neha123"
    const pho="8856006769"
    const add="pandhrapur"

    const navigate=useNavigate()

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
          }else{
                toast.success('success');
                navigate(-1);
                navigate('/home')
          }
    }

    return (
        <div className='header'>
             <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-body"></div>
           <h2 className='header'>Update Profile</h2>
  
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
          value={fnmae}
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
          value={confpass}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor=''>Address</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type='text'
          className='form-control'
          placeholder="Enter Address"
          value={add}
        />
      </div>

      <div className='mb-3'>
        <button onClick={onSignup} className='mt-3 btn btn-success'>
          Update Profile
        </button>
      </div>
    </div>
    <div className='col'></div>
  </div>
</div>

</div></div></div></div></div>
)
} 
export default UpdateProfile