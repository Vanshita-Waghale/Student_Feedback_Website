import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create animation with useEffect
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{
          background: 'linear-gradient(-45deg, #7f00ff, #e100ff, #8e2de2, #4a00e0)',
          backgroundSize: '400% 400%',
          animation: 'gradientBG 15s ease infinite',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
          paddingBottom: '50px'
        }}
      >
        <div className="row" style={{ width: '100%' }}>
          <div className="col-lg-6 text-center">
            <h3
              style={{
                fontFamily: 'cursive',
                marginTop: '60px',
                marginBottom: '40px',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              Contact Us
            </h3>
            <div
              className="card"
              style={{
                marginTop: '20px',
                backgroundColor: 'white',
                color: 'black',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)',
                borderRadius: '12px',
                padding: '25px',
                marginLeft: '20px',
                marginRight: '20px'
              }}
            >
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Name"
                      onChange={handleChange}
                      value={formData.name}
                      required
                      style={{
                        fontFamily: 'cursive',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      rows="4"
                      onChange={handleChange}
                      value={formData.message}
                      required
                      style={{
                        fontFamily: 'cursive',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}
                    />
                  </div>
                  <input
                    type="submit"
                    className="form-control"
                    style={{
                      backgroundColor: 'green',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                    value="Send Message"
                  />
                </form>
                <div className="mt-4">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/66021cf4bf62095243472b0e/f1649a5c-2e1d-4532-80b2-453bb90fbce4/1.png"
                    alt="LinkedIn"
                    width="50px"
                    height="50px"
                    style={{ marginRight: '10px' }}
                  />
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/930/595/original/skype-logo-skype-icon-transparent-free-png.png"
                    alt="Skype"
                    width="80px"
                    height="80px"
                    style={{ marginRight: '10px' }}
                  />
                  <img
                    src="https://pngbuy.com/wp-content/uploads/2023/06/splash-instagram-logo-png-3.png"
                    alt="Instagram"
                    width="50px"
                    height="50px"
                    style={{ marginRight: '10px' }}
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="50px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: '12px',
                marginTop: '40px'
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7306159503014!2d75.89021437437479!3d22.738251926880366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4df21a4ff1%3A0xd5f172b633bce712!2sOrlando%20Academy%20(CDAC%20ACTS%20Authorized%20Training%20Centre)!5e0!3m2!1sen!2sin!4v1729760377747!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
