import React from 'react';
import Control from '../components/Control';

interface GeneralLayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Control minStep={1} maxStep={4} />
      {children}
    </>
  );
};

export default GeneralLayout;
