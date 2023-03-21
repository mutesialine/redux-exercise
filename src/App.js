import React from 'react'
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="w-full max-w-xl mx-auto mt-32">
      <Profile />
      <Login />
    </div>
  );
}

export default App
