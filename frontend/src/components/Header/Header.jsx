import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/cars", display: "Services" },
  { path: "/blogs", display: "Repair Guides & Tips" },
  { path: "/repair", display: "Local Shops" },
  { path: "/tutorial", display: "Tutorial" },
  { path: "/contact", display: "FAQ" },
];

const Header = () => {
  const menuRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsAuthenticated(true);
      setUsername(userData.name); // Assuming the user data contains the name
    }
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from local storage
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <i className="ri-car-line"></i>
                    <span>AutoGarage <br /> Services</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-earth-line"></i></span>
                <div className="header__location-content">
                  <h4>India</h4>
                  <h6>Coimbatore, TamilNadu</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className="ri-time-line"></i></span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-items-center justify-content-end">
              <button 
                className="header__btn btn" 
                style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: 'white', cursor: 'pointer' }}
              >
                <Link to="/admin-signin" style={{ textDecoration: 'none', color: 'inherit', padding: '10px 20px', height: '23px' }}>
                  <i className="ri-user-line"></i> Go To Admin
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right d-flex align-items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="nav__item"><i className="ri-user-line"></i>{username}</span>
                  <Link to="#" onClick={handleLogout} className="nav__item d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i> Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signin" className="nav__item d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i> Login
                  </Link>
                  <Link to="/signup" className="nav__item d-flex align-items-center gap-1">
                    <i className="ri-user-line"></i> Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
