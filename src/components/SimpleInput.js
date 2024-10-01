import {useState} from 'react';

const SimpleInput = (props) => {
  const[enteredName, setEneteredName] = useState('');
  const[hasUserTouched, setHasUserTouched] = useState(false);

  const isUserInvalid = (enteredName.trim() === '' && hasUserTouched);

  const submitHandler = event => {
    event.preventDefault();
    setHasUserTouched(true);

    if(enteredName.trim() === '') return;
    setEneteredName('');
    setHasUserTouched(false);
  }

  const changeHandler = event => {
    setHasUserTouched(true);
    setEneteredName(event.target.value);
  }

  const blurHandler = () => {
    setHasUserTouched(true);
  }

  const formClass = isUserInvalid ? 'form-control invalid' : 'form-control' ;


  return (
    <form onSubmit={submitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={changeHandler} onBlur={blurHandler}/>
        {isUserInvalid && <p>User is Invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
