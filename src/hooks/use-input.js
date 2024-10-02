import {useState} from 'react';


const useInput = (checkInvalid) => {
    const[enteredValue, setEnteredValue] = useState('');
    const[hasUserTouched, setHasUserTouched] = useState(false);

    let isUserInvalid = checkInvalid(enteredValue) && hasUserTouched;

    const valueChangeHandler = event =>{
        setHasUserTouched(true);
        setEnteredValue(event.target.value);
    }

    const blurHandler = () => {
        setHasUserTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setHasUserTouched(false);
    }

    return {
        valueChangeHandler,
        blurHandler,
        isUserInvalid,
        reset
    }

}

export default useInput;