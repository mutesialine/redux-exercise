import React from 'react'
import {login , logout} from "../features/user"
import { useDispatch } from 'react-redux';
function Login() {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          dispatch(
            login({
              name: "pedro",
              age: 0,
              email: "ktesi@gmail.com",
            })
          );
        }}
        className="px-4 py-2 text-lg bg-blue-500"
      >
        Login
      </button>
      <button onClick= {()=> dispatch(logout ())}
        className="px-4 py-2 text-lg bg-blue-500"
      >
        logout
      </button>
    </div>
  );
}

export default Login
