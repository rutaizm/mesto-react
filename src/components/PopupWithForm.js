import React from "react";

function PopupWithForm({isOpen, name, title, children, onClose, buttonTitle, onSubmit, renderLoading}) {
    return (
    <>  
        <div className={`pop-up popup_type_${name} ${isOpen && "pop-up_opened"}`}>
            <div className="pop-up__container">        
                <form className="edit-form" name={name} onSubmit={onSubmit} noValidate>
                    <button className="pop-up__close popup-edit__close-button" onClick={onClose} type="button"></button>
                    <h2 className="edit-form__title">{title}</h2>
                    <fieldset className="edit-form__area">
                    {children}
                    </fieldset>
                    <button className="pop-up__save popup-edit__save-button" type="submit">
                        {renderLoading ? 'Сохранение...' : buttonTitle}</button>
                </form>
            </div>
        </div>
    </>  
    )
}

export default PopupWithForm;