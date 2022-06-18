import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar, renderLoading}) {

    const srcAvatar = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();      
        onUpdateAvatar(srcAvatar.current.value);
      } 

    React.useEffect(() => {
       if (isOpen) srcAvatar.current.value = '';
    }, [isOpen]); 

    return (
        <PopupWithForm  
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateAvatar={onUpdateAvatar}
            renderLoading={renderLoading}
            name="addAvatarForm" 
            title="Обновить аватар"
            buttonTitle="Сохранить">
                    <input type="url" id="avatar-input" ref={srcAvatar} name="avatar" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                    <span className="edit-form__input-error avatar-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup