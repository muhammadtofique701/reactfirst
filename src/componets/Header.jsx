function Header() {
  return (
<>

        <div className="row">
            <div className="col-md-4"> <i className="ri-phone-fill"></i>
                <a href="tel:#number">0311435364</a></div>
            <div className="col-md-4">   <i className="ri-mail-fill"></i>
                <a href="mailto:webmaster@example.com">youdoc@gmail.com.com</a></div>
            <div className="col-md-4">
                <a href="signin.html"><span className="glyphicon glyphicon-log-in"></span>SIGN IN</a>
                <a href="signup.html"><span className="glyphicon glyphicon-user"></span> Sign Up</a>
            </div>
        </div>

</>
  );
}

export default Header;