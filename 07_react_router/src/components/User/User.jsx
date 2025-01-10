// import React from 'react'
import { useParams } from "react-router"
function User() {
   const {userid} = useParams()
  return (
    <div className="bg-orange-700 text-center text-black py-2 h-screen flex justify-center items-center text-3xl">User: {userid}</div>
  )
}

export default User