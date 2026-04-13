import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void 
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }
const PrimaryButton = ({ children, onClick, icon: Icon, ...props }: Props) => {
    return (
         <button
         {...props}
        type="button"
        className="flex gap-2 h-10 items-center rounded-lg bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={onClick}
      >
        {Icon && <Icon className="size-5" />}
        {children}
      </button>
    );
};

export default PrimaryButton;