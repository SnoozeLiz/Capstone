import React from 'react'
import logo from '../images/Logo .svg'

const Nav = () => {
    return (
        <nav>
        <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        <div>
         <div className='bar'></div>
         <div className='bar'></div>
         <div className='bar'></div>
        </div>
        <ul>
            <li>
                
            </li>
        </ul>
        </nav>
    )
};

export default Nav;