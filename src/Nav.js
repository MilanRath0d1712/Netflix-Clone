import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';   
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import fire from "./auth/fire";
import "./Nav.css";


function Nav() {
    const [show, handleShow] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });  
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setIsLoggedIn(user)
            } else {
                setIsLoggedIn(user)
              // No user is signed in.
            }
          });

        return (() => {
            window.removeEventListener("scroll",()=>{});
        });
    }, [])
    

  return (
    <div className={`nav ${show && "nav__black"}`}>
    <img    
          className='nav__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
    />

    <Link
    style={{ display: "block",  }}
    to={isLoggedIn === null && `/auth`}
    key={"auth"}
    onClick={ ()=>isLoggedIn !==null && fire.auth().signOut()}
  >
  <button 
  //   href="my-app/react-form/src/App.js"
     type="button"
     className="btn"
    variant="primary" 
    
    >{isLoggedIn !==null ?"Sign Out":"Sign In"}</button> 
  </Link>



       
   
    </div>
  )
}

export default Nav