import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({isOpen, onClose, onAddPlace, renderLoading}) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name,
            link: link,
          });
    }

    React.useEffect(() => {
        if (isOpen) {
            setName('');
            setLink('');
        }
     }, [isOpen]); 

    return (
        <PopupWithForm 
            isOpen={isOpen} 
            onClose={onClose} 
            onSubmit={handleSubmit}
            onAddPlace={onAddPlace}
            renderLoading={renderLoading}
            name="addPhotoForm" 
            title="Новое место"
            buttonTitle="Создать">            
                    <input type="text" value={name} onChange={handleName} id="place-input" name="name" placeholder="Название" className="edit-form__field edit-form__field_type_place" required minLength="2" maxLength="30" />
                    <span className="edit-form__input-error place-input-error"></span>
                    <input type="url" value={link} onChange={handleLink} id="link-input" name="link" placeholder="Ссылка на картинку" className="edit-form__field edit-form__field_type_link" required />
                    <span className="edit-form__input-error link-input-error"></span>            
    </PopupWithForm>
    )
}

export default AddPlacePopup;