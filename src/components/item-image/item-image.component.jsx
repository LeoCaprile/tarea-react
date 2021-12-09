import React from 'react'
import { Link,useRouteMatch } from 'react-router-dom'
import './item-image.styles.scss'

const ItemImage = ({name,id,media,retailPrice,onClick}) => {

    return (
  
           <Link key={id} to={`/${id}`} onClick={onClick} className="item-container">
                <img src={media.thumbUrl} alt={name}></img>
                <span className="price">${retailPrice===0?'100':retailPrice}</span>
            </Link>
   
    )
}

export default ItemImage

