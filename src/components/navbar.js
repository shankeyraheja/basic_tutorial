import React from 'react'

const Navbar = ({companyname}) => {
  return (
    <div className="container">
      <h1>{companyname}</h1>
      <div className='item'>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
        <div>BLOGS</div>
      </div>
    </div>
  )
}

export default Navbar