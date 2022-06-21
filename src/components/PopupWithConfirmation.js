import React from "react";
import PopupWithForm from './PopupWithForm';

function PopupWithConfirmation ({isOpen, onClose, name, title, buttonTitle, onSubmit, renderLoading}) {

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpen} 
            onClose={onClose}
            name={name}
            title={title}
            buttonTitle={buttonTitle}
            onSubmit={onSubmit}
            renderLoading={renderLoading}
            handleOverlayClick={handleOverlayClick}
        >        
        </PopupWithForm>  
    )
}

export default PopupWithConfirmation;