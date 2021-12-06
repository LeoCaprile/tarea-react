import React, { useContext } from 'react'
import { RouteContext } from '../../App'
import CustomButton from '../../components/custom-button/Custom-Button.component'
import Cart from '../../images/icon-cart.svg'

import './item-page.styles.scss'

const ItemPage = () => {
    const {ruta,sneakerData} = useContext(RouteContext)

    const {name,media,retailPrice,brand} = sneakerData;
    
    return (
        <div className="item-page-container">
            <div>
            <img src={media.smallImageUrl}></img>
            </div>
            <div>
                <span>{brand.toUpperCase()}</span>    
                
                <h1>{name}</h1>
                <h2>${retailPrice}</h2>
                <CustomButton><img src={Cart}/> Add to Cart</CustomButton>
            </div>
           
        </div>
    )
}

export default ItemPage
