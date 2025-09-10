import React from 'react';
import './ResumeDownload.css';

function ResumeDownload() {
  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Vishal_resume.pdf'; 
    link.download = 'Vishal_Srinivasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-download-container">
      <button className="resume-download-btn" onClick={handleDownload}>
        <div className="download-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15L12 3M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="download-text">Download Resume</span>
        <div className="download-glow"></div>
      </button>
    </div>
  );
}

export default ResumeDownload;
