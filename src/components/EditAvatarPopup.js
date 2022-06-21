import React from 'react';
import PopupWithForm from './PopupWithForm';
import FormWithValidation from './FormWithValidation';

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar, renderLoading}) {

    const srcAvatar = React.useRef();
    const {inputValue, error, formIsValid, handleInputsChanges, resetValidation} = FormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();      
        onUpdateAvatar(srcAvatar.current.value);
      } 

    React.useEffect(() => {
       if (isOpen) {
           srcAvatar.current.value = '';
           resetValidation();
        }
    }, [isOpen, resetValidation]); 

    return (
        <PopupWithForm  
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateAvatar={onUpdateAvatar}
            renderLoading={renderLoading}
            disabled={!formIsValid}
            name="addAvatarForm" 
            title="Обновить аватар"
            buttonTitle="Сохранить">
                    <input type="url" id="avatar-input" onChange={handleInputsChanges} ref={srcAvatar} value={inputValue.avatar} name="avatar" placeholder="Ссылка на картинку" className={error.avatar ? "edit-form__field edit-form__field_type_error edit-form__field_type_link" : "edit-form__field edit-form__field_type_link"} required />
                    <span className={error.avatar ? "edit-form__input-error edit-form__input-error_active avatar-input-error" : "edit-form__input-error avatar-input-error"}>{error.avatar}</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup