import React from 'react'
import './ImageCard.css'

const ImageCard = ({card})=>{
    return(
        <div>
            {card.cards.map(card =>{
                const imageBackground = card.bg_image.image_url
                const cardName = card.name
                const cardUrl = card.url
                return(
                   <a href={cardUrl}><div name="cardName" style={{backgroundImage:`url(${imageBackground})`,backgroundSize:"cover"}} className="image-card"></div></a> 
                )
            })}
        </div>
    )
}

export default ImageCard 