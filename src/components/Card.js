import React from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext'
 
function Card({card, onCardClick}) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (`element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`); 
    const cardLikeButtonClassName = isLiked ? "element__like-button_active" : "element__like-button";


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
                     <button type="button" className={cardLikeButtonClassName}></button>
                     <span className="element__like-counter">{card.likes.length}</span>
                 </div>    
         </div>
     </li>
    )
}

export default Card