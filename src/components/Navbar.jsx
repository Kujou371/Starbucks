function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo-and-links">
          <div className="logo">
            <img src="logos/sblogo.webp" alt="Coffee Shop Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Rewards</a></li>
          </ul>
        </div>
        <div className="nav-buttons">
          <a href="#">Find a Store</a>
          <button className="btn-outline">Sign In</button>
          <button className="btn-dark">Join Now</button>
        </div>
      </nav>
    );
  }

  export default Navbar;