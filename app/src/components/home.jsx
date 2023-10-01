import React from 'react';

function Home(user) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.user.role}!</h2>

      {/* User Information */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="/path/to/profile-picture.jpg"
          alt="User Profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.user.fullName}</h3>
          <p className="text-gray-600">{user.user.role}</p>
        </div>
      </div>

      {/* Course Overview */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Your Courses</h3>
        <div className="flex space-x-4 mt-3">
          {/* Course Card */}
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <h4 className="text-lg font-semibold">Mathematics</h4>
            <p className="text-gray-600">Instructor: Prof. Smith</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          {/* Add more course cards here */}
        </div>
      </div>

      {/* Material Overview */}
      <div>
        <h3 className="text-xl font-semibold">Materials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Material Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Introduction to Algebra</h4>
            <p className="text-gray-600">Course: Mathematics</p>
          </div>
          {/* Add more material cards here */}
        </div>
      </div>
    </div>
  );
}

export default Home;

