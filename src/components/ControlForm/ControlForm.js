import React, {useState} from 'react';
import TextInput from '../TextInput/TextInput';

const ControlForm = () => {
  // name,email,password
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {name,email,password};

    console.log(newData);

    //reset form field
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <div>
      <h2>Control Form</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-md-6">
            <TextInput label="Name *" placeholder="Enter Name" id="name" name="name" value={name} onChange={e=>setName(e.target.value)} />
            <TextInput label="Email *" placeholder="Enter Email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
            <TextInput label="password *" placeholder="Enter Password" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <div className="form-group">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ControlForm;
