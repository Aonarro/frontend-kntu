import React from 'react';

const Display = ({ text, displayvalue }) => {
  console.log('Display Component Rendered ', { displayvalue });

  return (
    <p>
      This person's {text} is {displayvalue}
    </p>
  );
};

export default Display;
