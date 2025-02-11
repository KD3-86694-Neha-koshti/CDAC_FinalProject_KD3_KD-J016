import Navbar from '../components/Navbar'

function UserDashBoard(){
    return(
        <div>
            <Navbar/>
            <h2 className='header'></h2>
            <header className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Gas Booking Portal</h1>
          <p className="lead text-muted">Book your gas cylinders anytime, anywhere with ease.</p>
          <a href="bookgascylinder" className="btn btn-primary btn-lg mt-3">Get Started</a>
        </div>
      </header>
      {/* Services Section */}
      <section id="services" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
            <p className="text-muted">We offer a range of services to make your life easier.</p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-journal-bookmark display-4 text-primary"></i>
                  <h5 className="mt-3">Quick Booking</h5>
                  <p className="text-muted">Book your gas cylinder in just a few clicks.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-currency-dollar display-4 text-primary"></i>
                  <h5 className="mt-3">Affordable Prices</h5>
                  <p className="text-muted">Enjoy competitive and transparent pricing.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <i className="bi bi-truck display-4 text-primary"></i>
                  <h5 className="mt-3">Fast Delivery</h5>
                  <p className="text-muted">Get your gas cylinder delivered to your doorstep quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={require('../imagesss/aboutus1.jpg')} alt="About Us" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">About Us</h2>
              <p className="text-muted">
                We are committed to providing the best gas booking experience for our customers. With our
                user-friendly portal, booking gas cylinders has never been easier.
              </p>
              <a href="#contact" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Contact Us</h2>
            <p>Have questions? We're here to help!</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text"
                   className="form-control"
                    id="name" placeholder="Your Name"
                    value={"Tanmay Morge"} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Your Email" 
                  value={"Tanmay@gmail.com"}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4"
                   placeholder="Your Message"
                   value={"No Comments"}></textarea>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
            <div className="col-md-6">
              <h5>Contact Info</h5>
              <p><i className="bi bi-telephone-fill"></i> +1 234 567 890</p>
              <p><i className="bi bi-envelope-fill"></i> support@gasbooking.com</p>
              <p><i className="bi bi-geo-alt-fill"></i> 123 Gas Street, City, Country</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Gas Booking. All Rights Reserved.</p>
        </div>
      </footer>
        </div>
    )
}
export default UserDashBoard