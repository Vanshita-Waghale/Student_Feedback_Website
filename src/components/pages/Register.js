import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', username: '', password: '', email: '', reEnterPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome, ${formData.firstName}! Your registration is complete.`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
          <h2 style={{ fontFamily: 'cursive' }}>Register & Start the Fun!</h2>
          <p>🌈 “Every new friend starts with a hello.”</p>
          <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
            style={{ height: '100px' }} alt="loading" />
          <div className="card mt-4 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="firstName" className="form-control mb-2" placeholder="First Name" onChange={handleChange} />
              <input type="text" name="lastName" className="form-control mb-2" placeholder="Last Name" onChange={handleChange} />
              <input type="text" name="username" className="form-control mb-2" placeholder="Username" onChange={handleChange} />
              <input type="password" name="password" className="form-control mb-2" placeholder="Password" onChange={handleChange} />
              <input type="email" name="email" className="form-control mb-2" placeholder="Email" onChange={handleChange} />
              <input type="password" name="reEnterPassword" className="form-control mb-3" placeholder="Re-enter Password" onChange={handleChange} />
              <button type="submit" className="btn btn-light w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
