import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import '../index.css';
export default function SideBar() {

    const [isSidebarOpen, setisSidebarOpen ] = useState(true);

  let closeSidebar = () => {
        setisSidebarOpen(false);
  }

  let openSidebar = () => {
    setisSidebarOpen(true);
}

  return (
    <main>
        {!isSidebarOpen ? 
            (
                <button onClick={openSidebar} className='sidebar-toggle'>
                    <FaBars />
                </button>
            ) :
            (
                <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className='sidebar-header'>
                <img src = {logo} className='logo' alt='grocery Mart' />
                <button className='close-btn' onClick={closeSidebar}>
                <FaTimes />
                </button>
                </div>
                <ul className='links'>
                <li>
                    <a>Menu</a>
                </li>
                <li>
                    <a>grocery</a>
                </li>
                <li>
                    <a>Cocktail</a>
                </li>
            </ul>
            <ul className='social-icons'>
                
            </ul>
            </aside>
            )
        }
    </main>
  )
}
