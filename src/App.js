import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';  // Projects
import Page6 from './Page6';  // Certifications
import './App.css';


function App() {
  return (
    <div className="App">
      <HTMLFlipBook width={600} height={800} showCover={true}>
        <div className="page"><Page1 /></div>
        <div className="page"><Page2 /></div>
        <div className="page"><Page3 /></div>
        <div className="page"><Page4 /></div>
        <div className="page"><Page5 /></div>
        <div className="page"><Page6 /></div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;






