import logo from './images/icons/logo.png'
function Navbar() {
    return (
  
  <>

   <footer>
    
    <div className="row box">
        <div className="col-md-6"><a className="navbar-brand" href="index.html"><img src={logo} width="12%"/></a></div>
        <div className="col-md-6">
            <ul className="nav navbar-nav">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="department.html">Department</a></li>
                <li><a href="doctor.html">Doctors</a></li>
                <li><a href="contact.html">Contact</a></li>
                <button type="button" className="btn btn-danger">Appointment</button>
              </ul>
        </div>
    </div>
</footer>          
  </>
    );
  }

  export default Navbar;