import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import FormWithValidation from './FormWithValidation';

function AddPlacePopup ({isOpen, onClose, onAddPlace, renderLoading}) {
    
    const {inputValue, error, formIsValid, handleInputsChanges, resetValidation} = FormWithValidation({});

    // const [name, setName] = React.useState('');
    // const [link, setLink] = React.useState('');

    // function handleName(e) {
    //     setName(e.target.value);
    // }

    // function handleLink(e) {
    //     setLink(e.target.value);
    // }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace(inputValue);
    }

    React.useEffect(() => {
        if (isOpen) {
            resetValidation();
        }
     }, [isOpen, resetValidation]); 
     
    return (
        <PopupWithForm 
            isOpen={isOpen} 
            onClose={onClose} 
            onSubmit={handleSubmit}
            onAddPlace={onAddPlace}
            renderLoading={renderLoading}
            disabled={!formIsValid}
            name="addPhotoForm" 
            title="Новое место"
            buttonTitle="Создать">            
                    <input type="text" value={inputValue.name || ''} onChange={handleInputsChanges} id="place-input" name="name" placeholder="Название" className={error.name ? "edit-form__field edit-form__field_type_error edit-form__field_type_place" : "edit-form__field edit-form__field_type_place"} required minLength="2" maxLength="30" />
                    <span className={error.name ? "edit-form__input-error edit-form__input-error_active place-input-error" : "edit-form__input-error place-input-error"}>{error.name}</span>
                    <input type="url" value={inputValue.link || ''} onChange={handleInputsChanges} id="link-input" name="link" placeholder="Ссылка на картинку" className={error.link ? "edit-form__field edit-form__field_type_error edit-form__field_type_link" : "edit-form__field edit-form__field_type_link"} required />
                    <span className={error.link ? "edit-form__input-error edit-form__input-error_active link-input-error" : "edit-form__input-error link-input-error"}>{error.link}</span>            
    </PopupWithForm> 
    )
}

export default AddPlacePopup;