import React, { useState, useEffect } from 'react'
import MENDATA from '../../constants/MENDATA'


const HomeItemImage = () => {

    const [data] = useState(MENDATA.results)
    const [num, setNum] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(()=>{
            setNum(prevNum => prevNum = Math.floor(Math.random()*data.length) )
        },2000);

        return ()=> clearInterval(intervalId)
    }, [])

    const randomSneakerImage = (num) => data[num].media.smallImageUrl;


return (<img src={randomSneakerImage(num)} alt='Sneakers' />)


}

export default HomeItemImage
