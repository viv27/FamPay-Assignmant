import React from 'react'
import './Cardd.css'

const Cardd =({card})=>{

    return(
        <>
            {card["cards"].map(a=>{
                const image = a["bg_image"]["image_url"]
                const buttonTitle = a["cta"].map(b=>{
                    return b["text"]
                })
                const url = a["cta"].map(b=>{
                    return b["url"]
                })
            
                
                 return (
                     <div className="container">
                 <img src = {image} width="320" height="350" />
                 <p className="center">{a.title}</p>
                 <p className="down">{a.description}</p>
                 
               <a href={url}><button>{buttonTitle}</button></a>
                 </div>
                 )
                
})}
    
        
    </>
    )

}

export default Cardd