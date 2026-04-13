import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/">classification cleaner</Link>
                <div className="nav-links">
                    <Link to="/services">Services</Link>
                    <Link to="/booking">Book Now</Link>

                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;


