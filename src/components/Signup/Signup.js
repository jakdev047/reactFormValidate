import React,{useState} from 'react';
import TextInput from '../TextInput/TextInput';
import CheckkboxForm from '../CheckkboxForm/CheckkboxForm';
import RadioBoxForm from '../RadioBoxForm/RadioBoxForm';

const Signup = props => {
  // name,email,password,birthday,gender,agree
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [birthday,setBirthday] = useState('');
  const [gender,setGender] = useState('');
  const [agree,setAgree] = useState(false);
  const [errorsValues,setErrorsValues] = useState({});

  // validate
  const validateForm = () => {
    const errors = {}
    if(!name) {
      errors.name = 'Please Provide Your Name'
    }
    if(!email) {
      errors.email = 'Please Provide Your Valid Email'
    }
    if(!password) {
      errors.password = 'Please Provide Your Password'
    }

    if(!birthday) {
      errors.birthday = 'Please Provide Your Birthday'
    }

    if(!gender) {
      errors.gender = 'Please Select Your Gender'
    }

    return {
      errors,
      isValid:Object.keys(errors).length === 0 // return a array of errors that means ['name','email','password','birthday,'gender']
    }


    // else if (name.length > 40) {
    //   errors.name = 'Name must be between 5 - 40 character'
    // }
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    const {isValid,errors} = validateForm();

    if(isValid) {
      // data capture
      const newData = {name,email,password,birthday,gender,agree};
      props.createUser(newData)
      //reset form field
      setName('');
      setEmail('');
      setPassword('');
      setBirthday('');
      setGender('');
      setAgree(false);
      setErrorsValues({});
    }
    else {
      setErrorsValues(errors);
    }
    
  }

  return (
    <div>
      <h2 className="text-center">Signup Form</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-md-6">
            <TextInput label="Name *" placeholder="Enter Name" id="name" name="name" value={name} onChange={e=>setName(e.target.value)} error={errorsValues.name} />
            <TextInput label="Email *" type="email" placeholder="Enter Email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}  error={errorsValues.email}/>
            <TextInput label="password *" type="password" placeholder="Enter Password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} error={errorsValues.password} />
            <TextInput label="date *" className="form-control" type="date" id="birthday" name="birthday" value={birthday} onChange={e=>setBirthday(e.target.value)}  error={errorsValues.birthday}/>
            <div>
              <RadioBoxForm name="gender" value="Male" onChange={e=>setGender(e.target.value)}>
                Male
              </RadioBoxForm>
              <RadioBoxForm name="gender" value="Female" onChange={e=>setGender(e.target.value)}>
                Female
              </RadioBoxForm>
              {
                errorsValues.gender && <div className="invalid-feedback" style={{display:'block'}}>{errorsValues.gender}</div>
              }
            </div>

            
            <CheckkboxForm name="agree" checked={agree} onChange={e=>setAgree(e.target.checked)}>
              I agree to all terms & condition
            </CheckkboxForm>
            <div className="form-group">
              <button type="submit" className="btn btn-success" disabled={!agree}>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Signup;
