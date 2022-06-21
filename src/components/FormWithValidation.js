import React, { useEffect, useState,useMemo, useCallback } from 'react';

function FormWithValidation({}) {
    
    const [inputValue, setInputValue] = useState({});
    const [error, setError] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    const handleInputsChanges = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        setInputValue({...inputValue, [name]:value});
        setError({...error, [name]: target.validationMessage});
        setFormIsValid(target.closest('.edit-form').checkValidity());
    }
    
    const resetValidation = useCallback((inputValueNew={}, errorNew={}, formIsValidNew=false) => {
        setInputValue(inputValueNew);
        setError(errorNew);
        setFormIsValid(formIsValidNew);
    }, [setInputValue, setError, setFormIsValid]) 
    
    return {inputValue, error, formIsValid, handleInputsChanges, resetValidation};
}

export default FormWithValidation