import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../data/actions.js";
import { useDispatch } from "react-redux";

import backDor from "../assets/backDor.jpeg";
import phy from "../assets/vite.svg";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "Student", // Default role
    email: "",
    password: "",
    confirmPassword: "",
    gender: "Male", // Default gender
  });

  const history = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server or perform validation.

    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:1337/auth/register",
        formData,
      );

      if (res.status === 200) {
        const { user, token } = res.data;
        dispatch(setLogin(user, token));
        history('/dash');
        console.log("loged Successfuly");
      }
    } catch (err) {
      console.log("An Error occured, Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:justify-start md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a
            href="/"
            className="flex text-black font-bold text-xl p-4"
            alt="Logo"
          >
            <img src={phy} />
            PhysiClub
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Join Us.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="fullName" className="text-lg">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="role" className="text-lg">
                Role:
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
	  autoComplete="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="confirm-password" className="text-lg">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="gender" className="text-lg">
                Gender:
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
	  id="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  className="shadow border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  className="shadow border rounded  py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                Female
              </label>
            </div>

            <input
              type="submit"
              value="Register"
              className="cursor-pointer avtive:bg-black-600 rounded bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{" "}
              <a href="login" className="underline font-semibold">
                Log in here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src={backDor}
          alt="Background"
        />
      </div>
    </div>
  );
}

export default Register;
