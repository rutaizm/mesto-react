import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import FormWithValidation from './FormWithValidation';

function EditProfilePopup ({isOpen, onClose, onUpdateUser, renderLoading}) {
    
    const currentUser = React.useContext(CurrentUserContext);

    // const [name, setName] = React.useState('');
    // const [description, setDescription] = React.useState('');

    // React.useEffect(() => {
    //     setName(currentUser.name);
    //     setDescription(currentUser.about);
    //   }, [currentUser]);  

    const {inputValue, error, formIsValid, handleInputsChanges, resetValidation} = FormWithValidation({});

    // function handleName(e) {
    //     setName(e.target.value);
    // }

    // function handleDescription(e) {
    //     setDescription(e.target.value);
    //   }

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser(inputValue);
    }  

    React.useEffect(()=>{
        if(currentUser) {
            resetValidation(currentUser);
        }
    }, [currentUser, resetValidation, isOpen])
    
    return (
        <PopupWithForm
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}           
            renderLoading={renderLoading}
            disabled={!formIsValid}
            name="profileEditForm" 
            title="Редактировать профиль"
            buttonTitle="Сохранить">
                    <input type="text" value={inputValue.name} onChange={handleInputsChanges} id="name-input" name="name" placeholder="Имя" className={error.name ? "edit-form__field edit-form__field_type_error edit-form__field_type_name" : "edit-form__field edit-form__field_type_name"} required minLength="2" maxLength="40" />
                    <span className={error.name ?"edit-form__input-error edit-form__input-error_active name-input-error" :"edit-form__input-error name-input-error"}>{error.name}</span>
                    <input type="text" value={inputValue.about} onChange={handleInputsChanges} id="job-input" name="about" placeholder="Подпись" className={error.about ? "edit-form__field edit-form__field_type_error edit-form__field_type_info" : "edit-form__field edit-form__field_type_info"} required minLength="2" maxLength="200" />
                    <span className={error.about ? "edit-form__input-error edit-form__input-error_active job-input-error" :"edit-form__input-error name-input-error"}>{error.about}</span>  
        </PopupWithForm>            
    )
}

export default EditProfilePopup;