import React from "react";
 
function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return(        
     <li className="element card">
         <img className="element__image" src={card.link} alt={card.name} onClick={handleClick} />
         <button type="reset" className="element__delete-button"></button>
         <div className="element__item">
             <p className="element__title">{card.name}</p>
                 <div className="element__like-container">
                     <button type="button" className="element__like-button"></button>
                     <span className="element__like-counter">{card.likes.length}</span>
                 </div>    
         </div>
     </li>
    )
}

export default Card