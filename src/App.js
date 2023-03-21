import React from 'react'
import Login from "./components/Login"
import Profile from "./components/Profile"
import Theme from './components/Theme';

function App() {
  return (
    <div className="w-full max-w-xl mx-auto mt-32">
      <Profile />
      <Login />
      <Theme/>
    </div>
  );
}

export default App
