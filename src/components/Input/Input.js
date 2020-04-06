import React,{ useState } from 'react';

const Input = () => {
  
  // name,country,birthday,bio
  const [name,setName] = useState('');
  const [country,setCountry] = useState('');
  const [birthday,setBirthday] = useState('');
  const [bio,setBio] = useState('');
  const [gender,setGender] = useState('');
  const [agree,setAgree] = useState(false);
  const [skills,setSkills] = useState([]);

  const onHandleSubmit = e => {
    e.preventDefault();
    const newUser = {name,country,birthday,skills,gender,agree,bio}
    console.log(newUser)

    //reset form field
    setName('');
    setCountry('');
    setBirthday('');
    setBio('');
    setGender('');
    setAgree(false);
    setSkills([]);
  }

  const handleSkills = e => {
    if(e.target.checked) {
      setSkills([...skills, e.target.value]);
    }
    else {
      const newSkill = skills.filter(skill=> skill !== e.target.value);
      setSkills(newSkill);
    }
  }

  return (
    <div>
      <h2>Form Event</h2>
      <form className="my-5" onSubmit={ onHandleSubmit }>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Jubayer Alam Khan" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <select className="form-control" name="country" value={country} onChange={e=>setCountry(e.target.value)}>
                <option >Select Country</option>
                <option value="Ban">Bnagladesh</option>
                <option value="Bhu">Bhutan</option>
                <option value="In">India</option>
                <option value="Mal">Maldhives</option>
                <option value="Nep">Nepal</option>
                <option value="Pak">Pakistan</option>
                <option value="Sri">Srilanka</option>
              </select>
            </div>
            <div className="form-group">
              <input type="date" className="form-control" name="birthday" value={birthday} onChange={e=>setBirthday(e.target.value)}/>
            </div>

            <div className="form-group text-left">
              <h5>Skills</h5>
              <input className="form-check-input" type="checkbox" name="skills" value='HTML5' checked={skills.includes('HTML5')} 
               onChange={(e) => handleSkills(e)}/>  HTML5   <br/>
              <input className="form-check-input" type="checkbox" name="skills" value='CSS3' checked={skills.includes('CSS3')} 
              onChange={(e) => handleSkills(e)} /> CSS3  <br/>
              <input className="form-check-input" type="checkbox" name="skills" value='JS' checked={skills.includes('JS')} 
              onChange={(e) => handleSkills(e)} /> JS   <br/>
              <input className="form-check-input" type="checkbox" name="skills" value='React' checked={skills.includes('React')} 
              onChange={(e) => handleSkills(e)} /> React <br/>
            </div>

            <hr/>

            <div className="form-group text-left">
              <input className="form-check-input" type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)} /> Male <br/>
              <input className="form-check-input" type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)} /> Female
            </div>

            <div className="form-group text-left">
              <input className="form-check-input" type="checkbox" name="agree" checked={agree} onChange={e=>setAgree(e.target.checked)} />
              I agree to all terms & condition
            </div>

            <br/><br/>

            <div className="form-group">
              <textarea className="form-control" placeholder="about yourself" name="bio" value={bio} onChange={e=>setBio(e.target.value)}></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Input;
