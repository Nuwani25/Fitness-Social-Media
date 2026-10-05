import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// SVG Dumbbell icon with a color that matches the overall theme
const DumbbellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="#1E90FF" // Adjusted color for the dumbbell (darker blue)
  >
    <path d="M3 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h4V7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1h-4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7zm6 3v4h6v-4H9z"/>
  </svg>
);

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <div className="flex items-center gap-2">
            <DumbbellIcon />  
            <h1 className="font-bold text-blue-400 text-3xl rounded-lg">Gym Net</h1>
          </div>
        </Link>
        <ul className="flex gap-4">
          <Link to="">
            <div className="flex gap-3 ml-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwcHJvZmlsZXxlbnwwfHx8fDA%3D%3D"
                alt=""
                className="w-10 h-10 object-cover mt-2 rounded-full"
              />
              <div>
                <h1 className="text-gray-700 font-medium mt-2">Olivia Johnson</h1>
                <h1 className="text-slate-600 font-medium text-sm">oliviaj@gmail.com</h1>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
}
