import React, { useState, useEffect } from 'react';
import './CursorGlow.css';

function CursorGlow() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      // Check if the target is an interactive element
      const interactiveElements = ['a', 'button', '.grid-item', '.card_container div', '.circle', '.arrow', '.resume-download-btn'];
      const isInteractive = interactiveElements.some(selector => {
        if (selector.startsWith('.')) {
          return e.target.classList.contains(selector.substring(1));
        }
        return e.target.tagName.toLowerCase() === selector;
      });
      
      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      // Check if we're leaving an interactive element
      const interactiveElements = ['a', 'button', '.grid-item', '.card_container div', '.circle', '.arrow', '.resume-download-btn'];
      const isInteractive = interactiveElements.some(selector => {
        if (selector.startsWith('.')) {
          return e.target.classList.contains(selector.substring(1));
        }
        return e.target.tagName.toLowerCase() === selector;
      });
      
      if (isInteractive) {
        setIsHovering(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div 
        className={`cursor-glow ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      
      {/* Secondary glow ring */}
      <div 
        className={`cursor-glow-ring ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
      
      {/* Outer glow effect */}
      <div 
        className={`cursor-outer-glow ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />
    </>
  );
}

export default CursorGlow;
