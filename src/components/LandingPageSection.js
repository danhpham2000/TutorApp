import React from 'react';

const LandingPageSection = () => {
  return (
    <div style={{
      backgroundColor: '#7BEAD6',
      padding: '50px 0',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px'
      }}>
        Improve your grades with class-specific tutors!
      </h1>
      <button style={{
        backgroundColor: '#121117',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '4px'
      }}>
        Get Started
      </button>
    </div>
  );
};

export default LandingPageSection;