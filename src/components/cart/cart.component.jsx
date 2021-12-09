import React,{useContext,useState} from 'react'
import CartImg from '../../images/icon-cart.svg'
import { RouteContext } from '../../App'
import CartItems from '../cart-items/CartItems.component'
import './cart.styles.scss'

const Cart = () => {
const [showItems, setShowItems] = useState(false)
const {cart,total} = useContext(RouteContext);

    return (
    <div className="cart">
    <img onClick={()=>{if(showItems){setShowItems(false)}else{setShowItems(true)}}} src={CartImg} alt='cart' className='cart'/>
    {(total.totalCant>9)?(<div className="counter">9+</div>):(total.totalCant>0)?(<div className="counter">{total.totalCant}</div>):null}
    {showItems?<CartItems/>:null}
    </div>)
}

export default Cart
