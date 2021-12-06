import React from 'react'
import HomeItemImage from '../../components/home-item-image/home-item-image'

import './home.styles.scss'

const Home = () => {

    return (
        <div className='home'>
            <HomeItemImage/>
            <div>
            <h1 style={{fontSize:'100px', marginLeft:'150px'}}>The best sneakers at the best price</h1>
            
            
            </div>
            
        </div>
    )
}

export default Home
