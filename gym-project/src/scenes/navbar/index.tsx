import React from 'react'
import { useState } from "react"
import { Bars3Icon, LinkIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png";
import Link from "../navbar/Link"
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    
    // this allows us to use bolleans for css queries
    const isAboveMediumScreens = useMediaQuery("min-width: 1060px");


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
                        <Link 
                        page="Home" 
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                        />
                        <Link page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                         />
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