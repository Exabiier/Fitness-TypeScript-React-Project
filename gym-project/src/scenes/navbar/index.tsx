import React from 'react'
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";


  return (
  <nav> 
    <div
    className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
        {/* the mx-auto will center the inner div and the w-5/6 with make the div a percentage of the width */}
        <div className={`${flexBetween}  mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* right side */}
                <img alt="logo" src={Logo} />

                {/* Right Side  */}
                <div className={`${flexBetween} w-full `}>
                    {/* links for nav bar */}
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Home</p>
                        <p>Benefits</p>
                        <p>Our Classes</p>
                        <p>Contact Us</p>
                    </div>
                    {/* This is the sign up page */}
                    <div className={`${flexBetween} gap-8`}  >
                        <p>Sign In</p>
                        <button>Become a Member</button>
                    </div>

                </div>
           

            </div>
        </div>

    </div>
  </nav>
)}


export default Navbar