import React from 'react'
import { Link } from 'react-router-dom'
import './item-image.styles.scss'

const ItemImage = ({name,media,retailPrice,onClick}) => {


    return (
  
           <Link to={`/${name}`} onClick={onClick} className="item-container">
                <img src={media.thumbUrl} alt={name}></img>
                <span className="price">${retailPrice==0?'100':retailPrice}</span>
            </Link>
   
    )
}

export default ItemImage

