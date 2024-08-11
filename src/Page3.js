import React from 'react';

function Page3() {
  return (
    <div className="page">
      <h2>Work Experience</h2>
      <div className="work-item">
        <h3>End -User Support at Alpha Bank Greece</h3>
        <p>May 2023 - Present</p>
        <ul>
          <li>Installation of new software regarding the software upgrades of the bank.</li>
          <li>Collaborated with cross-functional teams to achieve workplace stability.</li>
          <li>Optimized application performance and improved user experience.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>Junior Automation Tester and SRE Engineer at Atos Greece</h3>
        <p>June 2022 - May 2023</p>
        <ul>
          <li>Assisted in the development of the company’s main product using Java.</li>
          <li>Wrote unit tests and participated in code reviews.</li>
          <li>Writing code for test cases running in jenkis in our automation suite.</li>
        </ul>
      </div>
    </div>
  );
}

export default Page3;
