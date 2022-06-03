import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState(null);
    const [userDescription, setUserDescription] = React.useState(null);
    const [userAvatar, setUserAvatar] = React.useState(null);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getProfileInfo(),
            api.getInitialCards()
        ])
            .then(([data, cards]) => {

                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
                setCards(cards)
            })
            .catch((err) => {
                console.log(err)
            });
          }, []);
        

    return(
        <main className="content">
        <section className="profile">
            <div className="profile__container">
                <img className="profile__avatar" src={userAvatar} alt="Жак-Ив Кусто" />
                <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                <div className="profile__bio"> 
                    <div className="profile__text">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__info">{userDescription}</p>
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
                />)
                )}
            </ul>
        </section>
    </main>
    )
}

export default Main