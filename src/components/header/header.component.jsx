import React from 'react'
import { Link } from 'react-router-dom'


import Avatar from '../../images/image-avatar.png'
import './header.styles.scss'
import Logo from '../../images/logo.svg'
import Cart from '../cart/cart.component'



const Header = () => {


    return (
        
        <div className='header'>
            <Link to='/'> 
            <img className='logo' src={Logo} alt="sneakers" />
            </Link>

            <Link className='link' to='/men'>Men</Link>
            <Link className='link' to='/women'>Women</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/contact'>Contact</Link>
            
            <Cart />
            <img src={Avatar} alt='avatar' className="profile-picture"/>
           
        </div>
        
    )
}

export default Header
