import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []); // This ensures the script is added only once when the component mounts

  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/shahdaim52/30min?text_color=202020&primary_color=456491"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default CalendlyWidget;