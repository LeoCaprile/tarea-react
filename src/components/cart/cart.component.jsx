import React,{useContext,useState} from 'react'
import CartImg from '../../images/icon-cart.svg'
import { RouteContext } from '../../App'
import CartItems from '../cart-items/CartItems.component'
import './cart.styles.scss'

const Cart = () => {
const [showItems, setShowItems] = useState(false)
const {cart} = useContext(RouteContext);

    return (
    <div className="cart">
    <img onClick={()=>{if(showItems){setShowItems(false)}else{setShowItems(true)}}} src={CartImg} alt='cart' className='cart'/>
    <div className="counter">1</div>
    {showItems?<CartItems/>:null}
    </div>)
}

export default Cart
