import React from "react";

function PopupWithForm({isOpen, name, title, children, onClose, buttonTitle}) {
    return (
    <>  
        <div className={`pop-up popup_type_${name} ${isOpen && "pop-up_opened"}`}>
            <div className="pop-up__container">        
                <form className="edit-form" name={name} noValidate>
                    <button className="pop-up__close popup-edit__close-button" onClick={onClose} type="button"></button>
                    <h2 className="edit-form__title">{title}</h2>
                    {children}
                    <button className="pop-up__save popup-edit__save-button" type="submit">{buttonTitle}</button>
                </form>
            </div>
        </div>
        {/* <div className={`pop-up popup-photo popup_type_${name}`}>
            <div className="pop-up__container">
                <form className="edit-form edit-form_type_photo" name={name} noValidate>
                    <button className="pop-up__close popup-photo__close-button" type="button"></button>
                    <h2 className="edit-form__title">{title}</h2>
                    {children}
                    <button className="pop-up__save popup-photo__save-button" type="submit">Создать</button>
                </form>
            </div>
        </div>
        <div className={`pop-up confirmation-popup popup_type_${name}`}>
            <div className= "pop-up__container confirmation-popup__container">
                <form className="edit-form" name={name} noValidate>
                    <button className="pop-up__close" type="button"></button>
                    <h2 className="edit-form__title">Вы уверены?</h2>
                    <button className="pop-up__save" type="submit">Да</button>
                </form>    
            </div>
        </div>
        <div className={`pop-up new-avatar-popup popup_type_${name}`}>
            <div className="pop-up__container">
                <form className="edit-form edit-form_new-avatar" name={name} noValidate>
                    <button className="pop-up__close" type="button"></button>
                    <h2 className="edit-form__title">{title}</h2>
                    {children}
                    <button className="pop-up__save" type="submit">Сохранить</button>
                </form>
            </div>
        </div> */}
    </>  
    )
}

export default PopupWithForm;