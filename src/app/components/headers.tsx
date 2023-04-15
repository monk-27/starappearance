import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
type HeaderProps = {
  showComponent1: boolean;
};
const Header: React.FC<HeaderProps> = ({ showComponent1 }) => {

  console.log("showComponent1", showComponent1);
  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: "1rem",
    marginTop: "1rem",
  };

  const logoStyle: React.CSSProperties = {
    marginRight: "1rem",
  };

  const rightStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };
  const listStyle: React.CSSProperties = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const underlineStyle: React.CSSProperties = {
    textDecorationLine: "underline",
    textDecorationColor: "black",
  };

  const linkStyle = {
    textDecorationLine: "none",
    marginLeft: "2rem",
    color: "black" ,
    transition: "color 0.3s ease-in-out" ,
    cursor: "pointer" ,
    ":hover": {
      color: "red" ,
    },
  };

  const dropdownStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    color: "#000",
    marginLeft: "1rem",
  };

  const cartIconStyle: React.CSSProperties = {
    marginLeft: "1rem",
    maxWidth: "100%",
  };
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ff214f",
    color: "#fff!important",
    padding: "6px 15px",
    border: "2px solid #ff214f",
    borderRadius: "10px",
    letterSpacing: "normal",
    fontWeight: 600,
    textTransform: "none",
    display: "inline-block",
    cursor: "pointer",
  };

  return (
    <>
      {!showComponent1 ? (
        <>
          <header style={headerStyle}>
            <Link href="/" passHref>
              <div style={logoStyle}>
                <img
                  src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"
                  alt="StarClinch"
                  height="35"
                />
              </div>
            </Link>
            <div style={rightStyle}>
              Entertainers
              <div style={dropdownStyle}>Join Community</div>
              <div style={linkStyle}>
                <button style={buttonStyle}>Post Your Requirement</button>
              </div>
              <Link href="/" passHref>
                <div style={cartIconStyle}>
                  <img
                    src="https://starclinch.com/static/mobile/images/header/search_icon.svg"
                    alt="SEARCH"
                  />
                </div>
              </Link>
              <Link href="/" passHref>
                <div style={cartIconStyle}>
                  <img
                    src="https://starclinch.com/static/mobile/images/header/cart.svg"
                    alt="SEARCH"
                  />
                </div>
              </Link>
            </div>
          </header>
          <div style={containerStyle}>
            <ul style={listStyle}>
              <li style={linkStyle}>Home</li>
              <li style={linkStyle}>CELEBRITY APPEARANCE</li>
              <li style={linkStyle}>Ranbir Kapoor</li>
            </ul>
          </div>
        </>
      ) : (
        
        <header style={headerStyle}>
          <Link href="/" passHref>
            <div style={logoStyle}>
              <img
                src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"
                alt="StarClinch"
                height="35"
              />
            </div>
          </Link>
          <div style={rightStyle}>
            Browse by Category
            <div style={dropdownStyle}>For Artists</div>
            <div style={linkStyle}>
              <button style={buttonStyle}>Post Your Requirement</button>
            </div>
            <Link href="/" passHref>
              <div style={cartIconStyle}>
                <img
                  src="https://starclinch.com/static/mobile/images/header/search_icon.svg"
                  alt="SEARCH"
                />
              </div>
            </Link>
            <Link href="/" passHref>
              <div style={cartIconStyle}>
                <img
                  src="https://starclinch.com/static/mobile/images/header/cart.svg"
                  alt="SEARCH"
                />
              </div>
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
