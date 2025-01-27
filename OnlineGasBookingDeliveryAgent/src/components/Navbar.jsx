import {Link,useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate=useNavigate()

    const onLogout=()=>{
        sessionStorage.removeItem('email')
        navigate('/login')
    }
    return(
        <nav className='navbar navbar-expand-lg bg-primary' data-bs-theme='dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>OnlineGasBooking</a>
                <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        >
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <Link className='nav-link' aria-current='page' to='/bookgascylinder'>
                            Gas Booking
                        </Link>
                        </li>
                        <li className='nav-item'>
              <Link className='nav-link' to='/viewhistroy'>
                Booking History
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/updateprofile'>
                Update User Profile
              </Link>
            </li>
            
            <li className='nav-item'>
              <button onClick={onLogout} className='nav-link'>
                Logout
              </button>
            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar