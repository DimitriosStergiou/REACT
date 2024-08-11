import React from 'react';

function Page2() {
  return (
    <div className="page">
      <h2>Education</h2>
      <div className="education-item">
      <h3>Master of Science in New Genereation Networks and Distributed Systems</h3>
        <p>University of West Attica</p>
        <p>Graduated: February 2025</p>
        <p><strong>Relevant Courses:</strong>Web Development, Virtualization, Cloud Computing, CyberSecurity, Computer Networks</p>
      </div>
      <div className="education-item">
        <h3>Bachelor of Science in Computer Science</h3>
        <p>University of Piraeus</p>
        <p>Graduated: July 2022</p>
        <p><strong>Relevant Courses:</strong>Web Development, Automation, Database Systems,CyberSecurity, Computer Networks</p>
      </div>

      <div className="education-item">
        <h3>High School Diploma</h3>
        <p>39th High School of Athens</p>
        <p>Graduated: June 2014</p>
        <p><strong>Honors:</strong> Class President</p>
      </div>
    </div>
  );
}

export default Page2;
