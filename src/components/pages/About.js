import React, { useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function About() {
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
          paddingTop: '50px',
          paddingBottom: '50px'
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img
                src="https://www.saralpath.com/assets/img/service/Customer-Feedback.gif"
                className='img-fluid'
                alt="Feedback"
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
                About Us
              </h3>
              <p style={{ color: 'white' }}>
                <br /><br />
                We aim to create a dynamic and interactive environment where students can share their thoughts on their academic experiences.
                <br /><br />
                Whether it's praising an inspiring lecture, suggesting improvements for classroom facilities, or providing constructive criticism on course content, we believe every piece of feedback can contribute to a better educational journey.
              </p>
            </div>
          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div className='row'>
            {[
              'https://img.freepik.com/premium-photo/flat-vector-style-illustration-diverse-group-people-talking-collaborating-white-background-v-52-job-id-952b5a8dd5f24dc38ad023f0df2df98a_941097-81801.jpg',
              'https://media.giphy.com/media/gdNE2HDwMdPzVWEAtC/giphy.gif',
              'https://media.baamboozle.com/uploads/images/405023/1655856608_45191.jpeg'
            ].map((src, index) => (
              <div className='col-lg-4' key={index}>
                <div className='card'>
                  <div className='card-body'>
                    <img
                      src={src}
                      className='img-fluid'
                      style={{ height: '223px', width: '100%' }}
                      alt={`Feedback ${index}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
