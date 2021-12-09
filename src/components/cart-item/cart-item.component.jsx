import React from 'react'

const CartItem = ({price,img,cant}) => {
    return (
            <tr>
                <td><img className='item' src={img}/></td>
                <td>{cant}</td>
                <td>{price}</td>
            </tr>
    )
}

export default CartItem
