import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

import { onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show"},
    { name: "My List"},
    { name: "Movies"},
  ];


  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxe5_DpdoGNWA_rw6QX3UuSm6DLKrp7HbMhBHsPMO707MOAAp8wHy7T-tM9OzNW02gTyA&usqp=CAU"
              alt="logo"
            />
             <span className="company-name">Stream</span>
         </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rightSide">
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll{
    display: flex;
  }
  .scrolled{
    display: flex;
    background-color: rgba(0,0,0,0.5);
  }
  nav{
    position: sticky;
    top: 0;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
   transition: 0.3s ease-in;
   .leftSide{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 5rem;

   .logo{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   img{
    margin-left: -50px;
    width: 5rem;
    height: 3.5rem;
   }
   div{

    color: white;
   }
   
  }
 
  .links {
    display: flex;
    margin-top:12px;

    list-style-type: none;
    gap: 3rem;
    li {
      a {
        font-family: 'Roboto', sans-serif; /* Google Font */
        color: white;
        text-decoration: none;
        font-size: 1.3rem; /* Increase the font size */
        cursor: pointer; /* Change cursor to pointer */
        &:hover {
          text-decoration: underline;
          color: violet; /* Change color to violet */
        }
      }
  }
}

.rightSide{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
        background-color: #23013f;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }&:focus{
        outline: none;
    }svg{
        color: white;
        font-size: 2rem;
    }
}
.company-name {
  font-size: 28px; /* Adjust the font size as needed */
  font-weight: bold; /* Make the text bold if desired */
  color: #23013f; /* Dark violet color */
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5), 
             -1px -1px 0 rgba(255, 255, 255, 0.5), 
              1px -1px 0 rgba(255, 255, 255, 0.5), 
             -1px 1px 0 rgba(255, 255, 255, 0.5);
  margin-left:7px;/* Adjust the color as needed */
}
`;

export default TopNav;
