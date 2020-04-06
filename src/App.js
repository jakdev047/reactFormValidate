import React,{ useState } from 'react';
import './App.css';

// import Input from './components/Input/Input';
// import UncontrolForm from './components/UncontrolForm/UncontrolForm';
// import ControlForm from './components/ControlForm/ControlForm';
import Signup from './components/Signup/Signup';

const App = () => {

  const [users,setUsers] = useState([]); 

  const createUser = user => {
    user.id = new Date().getTime().toString();
    setUsers([...users,user]);
  }

  return (
    <div className="App">
      <div className="container">

        <Signup createUser={createUser}/>

        <h3>All register users</h3>
        <ul className="list-group my-5">
          {
            users.map(user => {
              return <li key={user.id} className="list-group-item">
                {user.name} => {user.email}
              </li>
            })
          }

        </ul>

        {/* <ControlForm/> */}
        {/* <UncontrolForm/> */}
        {/* <Input/> */}
      </div>
    </div>
  );
}

export default App;
