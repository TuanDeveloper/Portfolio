import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (texts: string[], typingSpeed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        timerRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typeDelay = isDeleting ? deleteSpeed : typingSpeed;
    timerRef.current = setTimeout(handleTyping, typeDelay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentText, isDeleting, texts, currentIndex, typingSpeed, deleteSpeed, pauseTime]);

  return currentText;
};

export default useTypingEffect;