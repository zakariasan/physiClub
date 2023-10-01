import React from "react";

import phy from "../assets/vite.svg";
function Sidebar(user) {
	console.log(user)
  return (
    <aside className="w-40 bg-blue-600 text-white h-screen">
      {/* Header */}
      <div className="p-4 text-center">
        <img
          src={phy}
          alt="Logo"
          className="w-1/5 h-16 mx-auto rounded-full mb-2"
        />
        <h1 className="text-l font-bold">Welcome, {user.user.fullName}</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 mt-4">
        <a href="#" className="block px-4 py-2 hover:bg-blue-700">
          Home
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-blue-700">
          Courses
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-blue-700">
          Quizzes
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-blue-700">
          Profile
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
