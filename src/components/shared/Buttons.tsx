import React from 'react';

interface ActionButtonsProps {
  onSave: () => void;
  onClear: () => void;
  saveLabel?: string;
  clearLabel?: string;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onSave,
  onClear,
  saveLabel = 'Save Form',
  clearLabel = 'Clear Form',
}) => (
  <div className="flex gap-2 my-4">
    <button
      onClick={onSave}
      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded cursor-pointer transition"
    >
      {saveLabel}
    </button>
    <button
      onClick={onClear}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded cursor-pointer transition"
    >
      {clearLabel}
    </button>
  </div>
);

interface IconButtonProps {
  onClick: () => void;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  className?: string;
  variant?: 'primary' | 'danger';
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon: Icon,
  label,
  className = '',
  variant = 'primary',
}) => {
  const variantClass = variant === 'danger' ? 'text-red-600 hover:text-red-700' : 'text-gray-600 hover:text-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${variantClass} transition ${className}`}
      type="button"
    >
      <Icon className="h-6 w-6" />
      {label && <span className="sr-only">{label}</span>}
    </button>
  );
};
