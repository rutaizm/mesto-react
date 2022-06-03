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
    </>  
    )
}

export default PopupWithForm;