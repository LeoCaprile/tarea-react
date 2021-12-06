import React from 'react'
import { Link } from 'react-router-dom'


import Avatar from '../../images/image-avatar.png'
import './header.styles.scss'
import Logo from '../../images/logo.svg'
import Cart from '../../images/icon-cart.svg'



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
            
            <img src={Cart} className='cart'></img>
            <img src={Avatar} className="profile-picture"/>
        </div>
        
    )
}

export default Header
