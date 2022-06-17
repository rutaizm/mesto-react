import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

function App() {

    const [currentUser, setCurrentUser] = React.useState({});

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] =React.useState(false);
    
    
    const [selectedCard, setSelectedCard] = React.useState({});
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

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
        api.editProfileInfo(user.name, user.about)
            .then((res) => {
                setCurrentUser(res)
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            });
    }

    React.useEffect(() => {
            api.getProfileInfo()        
            .then((res) => {
                setCurrentUser(res)

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
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onEditAvatar = {handleEditAvatarClick}
            onCardClick = {handleCardClick}
        />
        <Footer />
        <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}/>
        <PopupWithForm 
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups} 
            name="addPhotoForm" 
            title="Новое место"
            buttonTitle="Создать">            
                    <input type="text" id="place-input" name="name" placeholder="Название" className="edit-form__field edit-form__field_type_place" required minLength="2" maxLength="30" />
                    <span className="edit-form__input-error place-input-error"></span>
                    <input type="url" id="link-input" name="link" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                    <span className="edit-form__input-error link-input-error"></span>            
        </PopupWithForm>
        <PopupWithForm  
            isOpen={isEditAvatarPopupOpen} 
            onClose={closeAllPopups} 
            name="addAvatarForm" 
            title="Обновить аватар"
            buttonTitle="Сохранить">
                    <input type="url" id="avatar-input" name="avatar" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                    <span className="edit-form__input-error avatar-input-error"></span>
        </PopupWithForm>
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
