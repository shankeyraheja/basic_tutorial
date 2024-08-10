import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";


const NavbarMobile = ({companyname}) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="containermobile">
    <h1>{companyname}</h1>
    <div className='itemmobile'>
      <div style={{fontSize:"25px"}} onClick={() => setShowMenu(!showMenu)}><CiMenuBurger /></div>
      {showMenu && 
        <>
        <div>HOME</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
        <div>BLOGS</div>
        </>
      }
    </div>
  </div>
  )
}

export default NavbarMobile