import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

    // const currentUser = React.useContext(CurrentUserContext);

    const srcAvatar = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();      
        onUpdateAvatar(srcAvatar.current.value);
      } 

    return (
        <PopupWithForm  
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateAvatar={onUpdateAvatar}
            name="addAvatarForm" 
            title="Обновить аватар"
            buttonTitle="Сохранить">
                    <input type="url" id="avatar-input" ref={srcAvatar} name="avatar" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                    <span className="edit-form__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup