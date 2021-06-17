import React, { useEffect, useState } from 'react';
import Cardd from './Cardd'
import ImageCard from './ImageCard'
import DynamicCard from './DynamicCard'
import ArrowCard from './ArrowCard'
import SmallDisplay from './SmallDisplay'
function Output(){

const [cards, setCards] = useState("")

useEffect(() =>{
    getOutput()
},[])

async function getOutput(){
    
    const response = await fetch('https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4')
    const data = await response.json()
   
    setCards(data)
    
    // data["card_groups"].map(card=>{
    //     console.log(card.design_type)
    //     if(card.design_type === 'HC6'){
            
    //         <>
    //         {console.log("Joko")}
            
    //         </>
               
            
    //     }
    // })
   
}

return(
    <>
   
    {/* <button onClick={()=> getOutput()}></button> */}
    
    {console.log("DATA: ", cards)}
    {console.log("ACACAC :",cards.length)}
    {cards !== ""  ? cards["card_groups"].map(card=>{
        
        if(card.design_type === 'HC3'){
            
        
            {console.log("Joko")}
            return <Cardd card={card}/>
            
               
            
        }
        else if (card.design_type === 'HC5'){
            return <ImageCard card={card}/>
        }
        else if(card.design_type ==="HC9"){
            return <DynamicCard card={card}/>
        }
        else if (card.design_type ==="HC6"){
            return <ArrowCard card={card}/>
        }
        else if (card.design_type ==="HC1"){
            return <SmallDisplay card={card}/>
        }
    }):<h1>Loading....</h1>
}
    
    

    </>
)

}
export default Output