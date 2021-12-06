import React, {useState,useContext} from 'react'
import { RouteContext } from '../../App'

import ItemImage from '../../components/item-image/item-image.component'
import WOMENDATA from '../../constants/WOMENDATA'
import './Women.styles.scss'


const Women = () => {
    const [data, setData] = useState(WOMENDATA.results)
    const {ruta,setRuta} = useContext(RouteContext);

    return (
        
        <div>
            <h1 className="title">Men</h1>
            <div className="items-container">

                {data.map(({name,...otherItemImagesProps})=><ItemImage name={name} {...otherItemImagesProps} 
                onClick={()=>{setRuta(`${name}`)}}></ItemImage>)}
       
            </div>
            
        </div>
       
    )
}

export default Women