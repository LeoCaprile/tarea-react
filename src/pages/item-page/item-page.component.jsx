import React, { useContext } from 'react'
import { RouteContext } from '../../App'
import CustomButton from '../../components/custom-button/Custom-Button.component'
import Cart from '../../images/icon-cart.svg'

import './item-page.styles.scss'

const ItemPage = () => {
    const {sneakerData,cart,setCart,setTotal} = useContext(RouteContext)

    const {name,media,retailPrice,brand} = sneakerData;
    
    const addToCart = (cart,item) => {
        let newCart = cart
        const newItem = {name:item.name,img:item.media.thumbUrl,price:item.retailPrice,cant:1};
        
        if(cart.find(item => newItem.name===item.name)){
          newCart.map(item => {if(newItem.name === item.name){
            item.cant++
          }})
        
        }else{
          newCart.push(newItem)
        }
        
        return newCart
    }

    const handleTotal = (cart) =>{

        const totalCant = cart.reduce((acc,el) =>{
            acc+= el.cant
            return acc
          },0)

        const totalPrice = cart.reduce((acc,el) =>{
            acc+= (el.price*el.cant)
            return acc
          },0)

        return{totalCant:totalCant,totalPrice:totalPrice}
    }

    return (
        <div className="item-page-container">
            <div>
            <img  src={media.smallImageUrl} alt={name}></img>
            </div>
            <div>
                <span>{brand.toUpperCase()}</span>    
                
                <h1>{name}</h1>
                <h2>${retailPrice}</h2>
                <CustomButton onClick={()=>{
                setCart(addToCart(cart,sneakerData));
                setTotal(handleTotal(cart));
                 console.log(cart)}} >
                <img alt='cart' src={Cart}/> Add to Cart</CustomButton>
            </div>
           
        </div>
    )
}

export default ItemPage
