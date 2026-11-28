import React,{useEffect, useState} from 'react'

function User() {
   const[data,setdata] = useState([]);
    useEffect(() => {
       // console.log("User Component Mounted");
       fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then(data=>console.log(data))

    })
  return (

    <>
    <h2>User</h2>



    </>
  )
}

export default User