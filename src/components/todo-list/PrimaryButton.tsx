import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void 

  }
const PrimaryButton = ({ children, onClick, ...props }: Props) => {
    return (
         <button
         {...props}
        type="button"
        className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default PrimaryButton;