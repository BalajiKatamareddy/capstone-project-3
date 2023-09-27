import React, { useState } from 'react';
function Login() {
    let css={
        fontSize:'25px'
    }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

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
          <h2>Login</h2><hr></hr>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} /><br></br>
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} /><br></br>
            </div>
            <button type="submit">Login</button><hr></hr>
          </form>
          <h2>Continue With Google</h2>
          <h2>Continue With Facebook</h2><hr></hr>
        </div>
      )}
      <footer>&copy; 2023-K&M Groups of Company</footer>
    </div>
  );
}

export default Login;
