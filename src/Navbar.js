import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar" >
        <Link to="/"><h1>InfoTech</h1></Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;