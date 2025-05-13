
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <ScrollReveal>
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 
            ${light ? 'text-white' : 'text-royal'}`}
        >
          {title}
        </h2>
      </ScrollReveal>
      
      {subtitle && (
        <ScrollReveal delay={200}>
          <p 
            className={`text-lg ${light ? 'text-gray-200' : 'text-gray-600'} 
              ${center ? 'max-w-3xl mx-auto' : ''}`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      
      <ScrollReveal delay={400}>
        <div 
          className={`w-24 h-1 mt-4 bg-gold 
            ${center ? 'mx-auto' : ''}`}
        ></div>
      </ScrollReveal>
    </div>
  );
};

export default SectionTitle;
