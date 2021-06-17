import './SmallDisplay.css'
import React from 'react'


const SmallDisplay = ({card})=>{

    return(
        <div className="wrapper">
        <div className="card-one">
            <img className="image" src={card.cards[0].icon.image_url}/>
            <p>{card.cards[0].name}</p>
        </div>
        <div className="card-two">
            <img className="image" src={card.cards[1].icon.image_url}/>
            <p>{card.cards[1].name}</p>
        </div>
        </div>
    )
}


export default SmallDisplay