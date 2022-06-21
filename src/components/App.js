import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] =React.useState(false);
    
    
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

    const [renderLoading, setRenderLoading] = React.useState(false);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setImagePopupOpen(true);
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setImagePopupOpen(false);
        setSelectedCard({});
    }

    function handleUpdateUser(user) {
        setRenderLoading(true);
        api.editProfileInfo(user.name, user.about)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() =>{
                setRenderLoading(false);
            })
    }

    function handleUpdateAvatar(link) {
        setRenderLoading(true);
        api.addAvatar(link)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() =>{
                setRenderLoading(false);
            });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
            setCards((cards) => cards.filter((item) => item._id !== card._id));
            });
    }

    function handleAddPlaceSubmit(card) {
        setRenderLoading(true);
        api.addCard(card.name, card.link)
            .then((newCard) => {
            setCards([newCard, ...cards]);
            closeAllPopups();
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() =>{
                setRenderLoading(false);
            });
    }

    React.useEffect(() => {
        Promise.all([
            api.getProfileInfo(),
            api.getInitialCards()
        ])                    
            .then((res) => {
                const [userInfo, cards] = res
                setCurrentUser(userInfo);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err)
            });
          }, []);

return (
    <CurrentUserContext.Provider value={currentUser}>  
        <div className="page__content">
        <Header />
        <Main 
            cards={cards}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onEditAvatar = {handleEditAvatarClick}
            onCardClick = {handleCardClick}
            onCardLike = {handleCardLike}
            onCardDelete = {handleCardDelete}
        />
        <Footer />
        <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            renderLoading={renderLoading}/>
        <AddPlacePopup 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            renderLoading={renderLoading}/>
        <EditAvatarPopup  
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            renderLoading={renderLoading}/>
        <ImagePopup 
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups} 
            card={selectedCard}
        />      
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
