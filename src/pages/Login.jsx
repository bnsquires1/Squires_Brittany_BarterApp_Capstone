import React, {useState} from 'react'

export const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
      
        const handleSubmit = (e) => {
          e.preventDefault();
          
        };

  return (
    <form>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
    <div className="col-sm-10">
      <div class="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
        <label className="form-check-label" for="gridRadios1" >
          Remember Me on This Device
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
        <label className="form-check-label" for="gridRadios2">
          Forgot Password
        </label>
      </div>
    </div>
  </fieldset>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
    
  )
}
