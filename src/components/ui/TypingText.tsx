import useTypingEffect from '../../hooks/useTypingEffect';

interface TypingTextProps {
  texts: string[];
  className?: string;
}

const TypingText = ({ texts, className = '' }: TypingTextProps) => {
  const currentText = useTypingEffect(texts);

  return (
    <span className={`typing-container ${className}`}>
      <span className="typing-text">{currentText}</span>
    </span>
  );
};

export default TypingText;