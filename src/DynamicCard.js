import React from 'react'
import './Dynamic.css'

const DynamicCard =({card})=>{
    
    return(
       card.cards.map(a=>{
           const imageUrl = a.url
           console.log(imageUrl)
        //    <div className="dynamic"  style={{backgroundImage:`url(${a.bg_image.image_url})`}}></div>
           return <a href={imageUrl}><img className="dynamic" src={a.bg_image.image_url}></img></a>
           
       })
    )
}

export default DynamicCard