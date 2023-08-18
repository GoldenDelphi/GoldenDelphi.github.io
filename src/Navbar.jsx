import './Styles.scss'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand caveat white">Divyanshi Srivastava</a>
    
          <div className="justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-pink">About</button>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-purple">Experience</button>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-green">Education</button>
              </li>
              <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-blue">Contact Me</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar