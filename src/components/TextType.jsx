import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TextType.css';

const TextType = ({
  text = ["Welcome to my portfolio"],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  onComplete = null
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text
        setTimeout(() => {
          setIsTyping(false);
          if (currentTextIndex === text.length - 1) {
            // All texts completed
            onComplete && onComplete();
          }
        }, pauseDuration);
      }
    } else {
      // Deleting text
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text or restart
        const nextIndex = (currentTextIndex + 1) % text.length;
        setCurrentTextIndex(nextIndex);
        setIsTyping(true);
      }
    }
  }, [currentText, currentTextIndex, isTyping, text, typingSpeed, pauseDuration, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setShowCursorState(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <div className={`text-type-container ${className}`}>
      <span className="text-type-text">
        {currentText}
        {showCursor && (
          <span className={`text-type-cursor ${showCursorState ? 'visible' : 'hidden'}`}>
            {cursorCharacter}
          </span>
        )}
      </span>
    </div>
  );
};

export default TextType;
