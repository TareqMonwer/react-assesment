import React from 'react';

const Container = ({ children, otherClasses }) => {
  return (
    <div className={`container mx-auto ${otherClasses}`}>
      {children}
    </div>
  );
}

export default Container;