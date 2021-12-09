import React, { useContext } from 'react'
import { RouteContext } from '../../App';
import CartItem from '../cart-item/cart-item.component';
import CartIsEmpty from '../CartEmpty/CartIsEmpty.component';
import './CartItems.styles.scss'
const CartItems = () => {
    const {cart,total} = useContext(RouteContext)
   

    return (
        <table className="cart-items">
            <tr>
                <th>Sneaker</th>
                <th>Cant.</th>
                <th>Price</th>
            </tr>
            {(cart.length)?cart.map(item => <CartItem {...item}/>):<CartIsEmpty/>}
            <tr>
                <th></th>
                <th>Total Cant.</th>
                <th>Total Price</th>
            </tr>
            <tr>
                <td></td>
                <td>{total.totalCant}</td>
                <td>{total.totalPrice}</td>
            </tr>

        </table>
    )
}

export default CartItems
