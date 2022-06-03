import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

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

  return (
    <div className="page__content">
    <Header />
    <Main 
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
    />
    <Footer />
    <PopupWithForm 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        name="profileEditForm" 
        title="Редактировать профиль"
        buttonTitle="Сохранить">
            <fieldset className="edit-form__area">
                <input type="text" id="name-input" name="name" placeholder="Имя" className="edit-form__field edit-form__field_type_name" required minLength="2" maxLength="40" />
                <span className="edit-form__input-error name-input-error"></span>
                <input type="text" id="job-input" name="about" placeholder="Подпись" className="edit-form__field edit-form__field_type_info" required minLength="2" maxLength="200" />
                <span className="edit-form__input-error job-input-error"></span>
            </fieldset>
    </PopupWithForm>
    <PopupWithForm 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        name="addPhotoForm" 
        title="Новое место"
        buttonTitle="Создать">
            <fieldset className="edit-form__area">
                <input type="text" id="place-input" name="name" placeholder="Название" className="edit-form__field edit-form__field_type_place" required minLength="2" maxLength="30" />
                <span className="edit-form__input-error place-input-error"></span>
                <input type="url" id="link-input" name="link" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                <span className="edit-form__input-error link-input-error"></span>
            </fieldset>
    </PopupWithForm>
    <PopupWithForm  
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        name="addAvatarForm" 
        title="Обновить аватар"
        buttonTitle="Сохранить">
            <fieldset className="edit-form__area">
                <input type="url" id="avatar-input" name="avatar" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                <span className="edit-form__input-error avatar-input-error"></span>
            </fieldset>
    </PopupWithForm>
    <ImagePopup 
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups} 
        card={selectedCard}
    />      
    </div>
  );
}

export default App;
