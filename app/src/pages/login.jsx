import React, { useState } from "react";
import backDor from "../assets/backDor.jpeg";
import phy from "../assets/vite.svg";

import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    try {
      const res = await axios.post(
        "http://localhost:1337/auth/login",
        formData,
      );
console.log(res)
      if (res.status === 200) {
        console.log("loged Successfuly");
      }
    } catch (err) {
      console.log("An Error occured, Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex  md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="/" className=" flex  text-black font-bold text-xl p-4">
            <img src={phy} />
            PhysiClub
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
	  name="email"
                id="email"
	  value={formData.email}
	  onChange={handleChange}
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                type="password"
	  name="password"
	  value={formData.password}
	  required
	  onChange={handleChange}
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="Log In"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{" "}
              <a href="register" className="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src={backDor}
        />
      </div>
    </div>
  );
}

export default Login;
