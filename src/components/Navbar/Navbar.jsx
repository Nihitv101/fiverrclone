import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
  

function Navbar() {
    const [active, setActive]=useState(false)
    const [open,setOpen]= useState(false)

    const {pathname} = useLocation();


    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false)
    }

    useEffect(()=>{
       window.addEventListener('scroll', isActive);
       
       return ()=>{
        window.removeEventListener('scroll', isActive)
       }
    })


    // Will be fetched from databse:
    const currentUser = {
        id:1,
        username:"Nihit",
        isSeller:true

    }



  return (
    <>

    <div className={active || pathname !== '/' ? 'navbar active':'navbar'}>
        <div className="container">
            <div className="logo">
            <Link to='/'>
                <span className='text'>fiverr</span>
            </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>

                {!currentUser?.isSeller  && <span>Become A Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        {/* <img src="" alt="" /> */}
                        <span>{currentUser?.username }</span>
                        {open && <div className='options'>
                            {
                                currentUser ?.isSeller && (
                                    <>
                                        <Link className='link' to='/mygigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add new Gig</Link>
                                    </>
                                )
                            }
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' to='/logout'>Logout</Link>
                    </div>}
                    
                </div> )}

                
            </div>
        </div>
      
        <div className={active || pathname !== '/' ? 'menu active':'menu'}>
            <Link className='link' to='/'>Graphics & Design</Link>
            <Link className='link' to='/'>Video & Animation</Link>
            <Link className='link' to='/'>Writing & Translation</Link>
            <Link className='link' to='/'>AI Services</Link>
            <Link className='link' to='/'>Digital Marketing</Link>
            <Link className='link' to='/'>Music & Arts</Link>
            <Link className='link' to='/'>Programming & Tech</Link>
            <Link className='link' to='/'>Business</Link>
            <Link className='link' to='/'>Lifestyle</Link>
        </div>

    </div>


    </>
  )
}

export default Navbar;
