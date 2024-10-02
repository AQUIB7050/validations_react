import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {reset : resetName, isUserInvalid : isNameInvalid, valueChangeHandler : nameChangeHandler, blurHandler:nameBlurHandler} = useInput(value => value.trim() === '');
  const {reset : resetLastName, isUserInvalid : isLastNameInvalid, valueChangeHandler : lastNameChangeHandler, blurHandler:lastNameBlurHandler} = useInput(value => value.trim() === '');
  const {reset : resetEmail, isUserInvalid : isEmailInvalid, valueChangeHandler : emailChangeHandler, blurHandler:emailBlurHandler} = useInput(value => (!value.includes('@')));

  let formIsValid = false;

  if(!isNameInvalid && !isLastNameInvalid && !isEmailInvalid){
    formIsValid = true;
  }

  const submitHandler = () => {
    resetName();
    resetLastName();
    resetEmail();
  }

  const formNameClass = isNameInvalid ? 'form-control invalid' : 'form-control' ;
  const formLastNameClass = isLastNameInvalid ?'form-control invalid':'form-control';
  const formEmailClass = isEmailInvalid ?'form-control invalid':'form-control';


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={formNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
          {isNameInvalid && <p>Name is not valid.</p>}
        </div>
        <div className={formLastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {isLastNameInvalid && <p>LastName is not valid.</p>}
        </div>
      </div>
      <div className={formEmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {isEmailInvalid && <p>Email is not valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
