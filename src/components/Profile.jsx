import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const user = useSelector((state)=> state.user.value)
  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold pb-3">Profile page</h2>
      <p>name :{user.name}</p>
      <p>Age :{user.age}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default Profile;
