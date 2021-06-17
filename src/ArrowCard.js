import React from 'react'
import './ArrowCard.css'
const ArrowCard = ({card})=>{

    return(
        card.cards.map(c=>{
            const imageUrl = c.icon.image_url
            console.log(imageUrl)

            return <a href={c.url}><div className="ArrowCard">
                <img className="dynamic-image" src={imageUrl}/>
                <div className="text">
                <p>{c.title}</p>
                
                </div>
                <p>➡️</p>
            </div></a>
        })
    )
}

export default ArrowCard