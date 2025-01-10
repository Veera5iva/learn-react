// import React from 'react'

import { useContext } from "react"
import UserContext from "../context/userContext"
// import { use } from "react";

function Profile() {
   const {user} = useContext(UserContext)
   console.log(user);
   
   return (
      <div>Profile: {user.username}</div>
   )
}

export default Profile
