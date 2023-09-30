import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogout } from "../data/actions.js";

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
	if (!user.user)
		return null
  const handleLogout = () => {
    dispatch(setLogout()); // Dispatch the logoutUser action to log out the user
  };
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex md:justify-start pt-12 md:pl-12 md:-mb-24">
          <h1 className="text-black font-bold text-xl p-4">
            Welcome, {user.user.fullName}!
          </h1>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Dashboard</p>
          {/* Add your dashboard content here */}
	  <p>

	  a simple way to see your progress stay tuned
	  </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold text-lg hover:bg-red-700 p-2 mt-8"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Add additional dashboard content here */}
    </div>
  );
}

export default Dash;
