import '../style/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav-center">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <span>HireNex</span>
        </div>
        <div className="links">
          <a className="nav-link" href='#job-search' >
            Services
          </a>
          <a className="nav-link">
            Login
          </a>
          <a className="nav-link" >
            SignUp
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
