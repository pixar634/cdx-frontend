import React from 'react'
import {
    ShoppingBagIcon, TrashIcon
    ,
    PlusIcon, MinusIcon
} from '@heroicons/react/outline';
import Logo from '../assets/img/logo.jpg'
function Header() {
    return (
        <header className="sticky top-0 z-40 py-4 bg-slate-800 dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            {/* <!-- Mobile hamburger --> */}
            {/* <button
                className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
                // onClick={toggleSidebar}
                aria-label="Menu"
            >
                <PlusIcon className="w-6 h-6" aria-hidden="true" />
            </button> */}
           
                    <a href="/StepperForm">
                        <img
                            aria-hidden="true"
                            className="object-cover w-10 h-10 p-1 rounded-xl "
                            src={Logo}
                            alt="logo"
                        />
                    </a>

                
               
            <ul className="flex items-center flex-shrink-0 space-x-6">
                {/* <!-- Theme toggler --> */}
                <li className="flex">
                    <button
                        className="rounded-md focus:outline-none focus:shadow-outline-purple"
                        // onClick={toggleMode}
                        aria-label="Toggle color mode"
                    >
                       
                    </button>
                </li>
                {/* <!-- Notifications menu --> */}
                
                

                {/* <!-- Profile menu --> */}
             
                   

            </ul>
        </div>
    </header>
    )
}

export default Header
