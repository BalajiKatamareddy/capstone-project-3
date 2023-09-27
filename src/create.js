import React, { useState } from 'react';
function Create() {
    let css={
        background:'orange',
        color:'yellow',
        fontSize:'25px'
    }
   const [name, setName] = useState('');
   const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange=(e)=>{
    setMobile(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div style={css}>
      {loggedIn ? (
        <div>
          <h2>Welcome to K&M GROUPS {email}!</h2>
          <p>You are now logged in.</p>
        </div>
      ) : (
        <div>
            <h2>Welcome to K&M GROUPS</h2>
          <h2>Create Account</h2><hr></hr>
          <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
              <input type="text" value={name} onChange={handleNameChange} /><br></br>
              <label>Mobile:</label>
              <input type="number" value={mobile} onChange={handleMobileChange} /><br></br>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} /><br></br>
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} /><br></br>
            </div>
            <button type="submit">Create Your Account</button><hr></hr>
          </form>
        </div>
      )}
      <footer>&copy; 2023-K&M Groups of Company</footer>
    </div>
  );
}

export default Create;
