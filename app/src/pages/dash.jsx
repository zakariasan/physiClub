import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogout } from "../data/actions.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";
import Home from "../components/home.jsx";


//function dash- dashboard

function Dash() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);


  console.log(user.user);

  useEffect(() => {
    // Check if user is null or undefined
    if (!user || !user.user) {
      // Redirect to the login page
      navigate("/login");
    }
  }, [user, navigate]);
  if (!user.user) return null;
  const handleLogout = () => {
    dispatch(setLogout()); // Dispatch the logoutUser action to log out the user
  };
  return (
	  <div className="flex"> 
      <Sidebar user={user.user} />
	  <div className="flex-grow p-4">
        <Routes>
          <Route exact path="/" element={<Home user={user.user} />} />
          <Route path="/home" element={<Home user={user.user}/>} />
        </Routes>
	  </div>
	  </div>

  );
}

export default Dash;
