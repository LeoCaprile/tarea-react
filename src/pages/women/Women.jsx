import React, {useState,useContext} from 'react'
import { RouteContext } from '../../App'

import ItemImage from '../../components/item-image/item-image.component'
import WOMENDATA from '../../constants/WOMENDATA'
import './Women.styles.scss'


const Women = () => {
    const [data] = useState(WOMENDATA.results)
    const {setRuta,setSneakerData} = useContext(RouteContext);

    return (
        
        <div>
            <h1 className="title">Women</h1>
            <div className="items-container">

                {data.map(({name,id,...otherItemImagesProps})=><ItemImage id={id} name={name} {...otherItemImagesProps} 
                onClick={()=>{setRuta(`${id}`);
                setSneakerData({name,...otherItemImagesProps})}}></ItemImage>)}
       
            </div>
            
        </div>
       
    )
}

export default Women