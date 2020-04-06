import React from 'react'

const UncontrolForm = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
    // data capture
    const newData = {};
    newData.name = e.target.name.value;
    newData.email = e.target.email.value;
    newData.password = e.target.password.value;

    console.log(newData);
    // reset field
    e.target.reset();
  }
  return (
    <div>
      <h2>Uncontrol Form</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Jubayer Alam Khan" />
            </div>
            <div className="form-group">
              <input type="email" name="email" className="form-control" placeholder="shuvo047niter@gmail.com" />
            </div>
            <div className="form-group">
              <input type="password" name="password" className="form-control" placeholder="********" />
            </div>
            <div className="form-group text-left">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UncontrolForm;
