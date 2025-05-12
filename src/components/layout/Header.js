import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
function Header()
{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid"  style={{ backgroundColor: 'white',padding: '0'}}>
    <a className="navbar-brand" href="#">FEEDBACK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'white'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#" to="/Contact">Contact</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" href="#" to="/Login">Login</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" href="#" to="/Register">Register</Link>
        </li>
        </ul>
        
    </div>
  </div>
</nav>

        </>
    )
}
export default Header