import React, {useState,useContext} from 'react'
import { RouteContext } from '../../App'

import ItemImage from '../../components/item-image/item-image.component'
import MENDATA from '../../constants/MENDATA'
import './Men.styles.scss'


const Men = () => {
    const [data, setData] = useState(MENDATA.results)
    const {ruta,setRuta, sneakerData,setSneakerData} = useContext(RouteContext);

    return (
        
        <div>
            <h1 className="title">Men</h1>
            <div className="items-container">

                {data.map(({name,...otherItemImagesProps})=><ItemImage name={name} {...otherItemImagesProps} 
                onClick={()=>{setRuta(`${name}`);
                setSneakerData({name,...otherItemImagesProps})}}></ItemImage>)}
       
            </div>
            
        </div>
       
    )
}

export default Men
