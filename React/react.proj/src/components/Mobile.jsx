// import React from 'react'

// function Mobile({mobile}) {
//   return (
//     <>
//         <h2>Mobile</h2>
//         <p>{mobile}</p>
//     </>
//   )
// }

// export default Mobile
import { useContext } from 'react'
import { MobileContext } from './MobileContext'

function Mobile() {
  const mobile = useContext(MobileContext)

  return (
    <>
      <h2>Mobile = {mobile}</h2>
    </>
  )
}

export default Mobile