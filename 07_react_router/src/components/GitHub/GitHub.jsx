/* eslint-disable react-refresh/only-export-components */
// import React from 'react'

// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
// import { data } from "react-router";

function GitHub() {
   const data = useLoaderData()
   console.log(data);
   
   // const [data, setData] = useState({})
   // useEffect(() => {
   //    fetch("https://api.github.com/users/Veera5iva")
   //    .then(res => res.json())
   //    .then(res => {
   //       setData(res);
   //       console.log(res);
         
   //    })
   // }, [])
   return (      
      <div className='bg-yellow-700 text-white text-center text-4xl py-4'>
         GitHub followers: {data.followers}
         GitHub following: {data.following}
      </div>
   )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/Veera5iva")
   return response.json();
}