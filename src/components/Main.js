import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
             api.getInitialCards()       
            .then((cards) => {
                setCards(cards)
            })
            .catch((err) => {
                console.log(err)
            });
          }, []);
        
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;
        api.deleteCard(card._id)
            .then(() => {
            setCards((cards) => cards.filter((item) => item._id !== card._id));
            });
    }

    return(
        <main className="content">
        <section className="profile">
            <div className="profile__container">
                <img className="profile__avatar" src={currentUser.avatar} alt="Жак-Ив Кусто" />
                <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                <div className="profile__bio"> 
                    <div className="profile__text">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{currentUser.about}</p>
                </div>
            </div>
            <button className="profile__add-photo-button" type="button" onClick={onAddPlace}></button>
        </section>
        <section className="elements" aria-label="Фотографии пользователя">
            <ul className="elements__photoes">
                {cards.map((card) =>
                (<Card
                    key={card._id}
                    card={card}
                    onCardClick={onCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />)
                )}
            </ul>
        </section>
    </main>
    )
}

export default Main