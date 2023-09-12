import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <h1>LAB - WikiCountries</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
