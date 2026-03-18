import React from 'react';

const Phone = (props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16 2H8a3 3 0 00-3 3v14a3 3 0 003 3h8a3 3 0 003-3V5a3 3 0 00-3-3zm-3 19h-2v-1h2zm3-2H8a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v13a1 1 0 01-1 1z"></path>
    </svg>
  );
};

export default Phone;
