import React, { useRef } from 'react'
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";



const Header:React.FC = () => {

    const menuSection = useRef<HTMLDivElement>(null)

    const openNavbar = () => {
        if(menuSection.current){
            menuSection.current.classList.add("aktiv")
        }
    }

    const closeNavbar = () => {
        if(menuSection.current){
            menuSection.current.classList.remove("aktiv")
        }
    }
  return (

    <>
{/* Mobile menu Start */}
    <div className="menu " ref={menuSection}>
    
    <MdOutlineClose onClick={closeNavbar} className='fa-regular fa-rectangle-xmark' />

    <nav>
        <a href="">Sounds</a>
        <a href="">Skills</a>
        <a href="">Plugins</a>
        <a href="">Studio</a>
        <a href="">Community</a>
        <a href="">Blog</a>
        <a href="">Pricing</a>
    </nav>
    <div className="menu-buttonlar">

        <button className="first-menu-button">Login</button>
        <button className="second-menu-button">Sign up</button>
    </div>

</div>
   {/* Mobile menu end */}


    <div className="header py-4 ">
    <div className="container">
        <div className="row">
            <div className="header-left-side col-md-6 d-md-flex align-items-md-center">
                <img src="/assets/images/header part/logo.svg" alt=""/>
                <nav>
                    <a href="">Sounds</a>
                    <a href="">Skills</a>
                    <a href="">Plugins</a>
                    <a href="">Studio</a>
                    <a href="">Community</a>
                    <a href="">Blog</a>
                    <a href="">Pricing</a>
                </nav>
                
                <FaBars onClick={openNavbar} className='fa-solid fa-bars-staggered' />

            </div>

            <div className="header-right-side col-md-6 text-md-end">
                <button className="first-button">Login</button>
                <button className="second-button">Sign up</button>


            </div>
        </div>
    </div>
</div>

</>
   
  )
}

export default Header