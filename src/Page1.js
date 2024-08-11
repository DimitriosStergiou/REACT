import React from 'react';
import myPhoto from './images/my-photo.jpg'; // Adjust the path according to your structure

function Page1() {
  return (
    <div className="page">
      <h2>About Me</h2>
      <div className="about-me-content">
      <img src={myPhoto} alt="About Me" className="my-photo" />
      <p>Hello! I'm Dimitrios Stergiou, a passionate IT Support Engineer.</p>
      <p>I specialize in Software and have a strong background in Networks.</p>
      </div>
    </div>
  );
}

export default Page1;
