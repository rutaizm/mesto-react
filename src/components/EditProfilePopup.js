import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function EditProfilePopup ({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
      }

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
          });
    }  

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);   

    return (
        <PopupWithForm
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmit}
            onUpdateUser={onUpdateUser}
            name="profileEditForm" 
            title="Редактировать профиль"
            buttonTitle="Сохранить">
                    <input type="text" value={name} onChange={handleName} id="name-input" name="name" placeholder="Имя" className="edit-form__field edit-form__field_type_name" required minLength="2" maxLength="40" />
                    <span className="edit-form__input-error name-input-error"></span>
                    <input type="text" value={description} onChange={handleDescription} id="job-input" name="about" placeholder="Подпись" className="edit-form__field edit-form__field_type_info" required minLength="2" maxLength="200" />
                    <span className="edit-form__input-error job-input-error"></span>  
        </PopupWithForm>            
    )
}

export default EditProfilePopup;