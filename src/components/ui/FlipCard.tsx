import { type ReactNode } from 'react';

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  delay?: number;
}

const FlipCard = ({ frontContent, backContent, className = '', delay = 0 }: FlipCardProps) => {
  return (
    <div 
      className={`flip-card h-40 ${className}`} 
      data-aos="flip-left" 
      data-aos-delay={delay}
    >
      <div className="flip-card-inner h-full">
        <div className="flip-card-front gradient-border interactive-card h-full rounded-lg bg-gradient-to-br from-[#2a1e4d] to-[#1a0f3a] p-5 flex items-center space-x-4 shadow-[0_0_20px_#3f2a7a]">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;