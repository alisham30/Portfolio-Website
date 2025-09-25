import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextType from './TextType';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTextType, setShowTextType] = useState(true);

  const handleTextTypeComplete = () => {
    console.log('TextType animation completed!');
    // Hide loading screen after welcome messages complete
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900"
        >
          <div className="text-center">
            {/* TextType Animation */}
            {showTextType && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <TextType 
                  text={[
                    "Welcome to my portfolio website",
                    "It's great to have you here"
                  ]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-4xl md:text-6xl font-bold text-white"
                  onComplete={handleTextTypeComplete}
                />
              </motion.div>
            )}

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="text-lg text-purple-200 font-medium"
            >
              Loading amazing content...
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <div className="w-8 h-8 border-2 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
