import React from "react";
import '../stylesheet/navbarr.css';

const styles = {
  navbar: {
    backgroundColor: "#dc143c",
  },
  navbarr: {
    color: "#00000",
    fontSize: "20px",
  },
  h1: {
    fontSize: "50px",
  },
  padding: {
    padding: "8px",
  }
};

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.navbar}>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Dan De Luna</h1>
      </header>
      <ul style={styles.navbarr} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
          >
            About me 
          </a>
        </li>
        <li style={styles.padding}  className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio/Current Projects
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link-active" : "nav-link"
            }
          >
            Contact Me 
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link-active" : "nav-link"
            }
          >
            Current Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;