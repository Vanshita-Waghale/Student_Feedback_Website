import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome back, ${loginData.username}!`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const backgroundStyle = {
    background: 'linear-gradient(135deg, #7b2ff7, #f107a3)',
    minHeight: '100vh',
    padding: '40px',
    color: 'white',
    animation: 'pulse 10s infinite ease-in-out'
  };

  return (
    <>
      <Header />
      <div style={backgroundStyle}>
        <div className="container text-center">
          <h2 style={{ fontFamily: 'cursive', marginBottom: '10px' }}>Login & Let's Explore!</h2>
          <p>✨ “Adventure begins with a single click.”</p>
          <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
            style={{ height: '100px' }} alt="loading" />
          <div className="card mt-4 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="username" className="form-control mb-3" placeholder="Username" onChange={handleChange} />
              <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} />
              <button type="submit" className="btn btn-light w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
