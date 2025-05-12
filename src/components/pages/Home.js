import React, { useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import axios from 'axios';

function Home() {
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
        className='container-fluid'
        style={{
          background: 'linear-gradient(-45deg, #7f00ff, #e100ff, #8e2de2, #4a00e0)',
          backgroundSize: '400% 400%',
          animation: 'gradientBG 15s ease infinite',
          minHeight: '100vh',
          paddingTop: '50px',
          paddingBottom: '50px'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img
                src="https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif"
                className='img-fluid'
                alt="Welcome"
              />
            </div>
            <div className='col-lg-6'>
              <h3
                style={{
                  fontFamily: 'cursive',
                  marginTop: '80px',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'white'
                }}
              >
                Welcome to Student Feedback Website!
              </h3>
              <p style={{ color: 'white' }}>
                Your Voice, Your Impact
                <br />
                At Student Feedback website, we empower students to share their experiences and insights to create a better learning environment for everyone.
                <br /><br />
                Why Your Feedback Matters
                <br />
                Your opinions are invaluable in shaping the educational journey. Whether it’s acknowledging a brilliant professor, suggesting improvements for campus facilities, or providing constructive feedback on courses, every piece of input can lead to meaningful change.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
