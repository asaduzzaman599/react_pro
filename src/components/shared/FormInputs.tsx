import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = '',
  error,
  ...props
}) => {
  const baseClass = 'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

  return (
    <div className={className}>
      {label && <span className="text-gray-500 text-sm">{label}</span>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={baseClass}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

interface TextareaInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  rows?: number;
}

export const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = '',
  rows = 4,
  ...props
}) => {
  const baseClass = 'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

  return (
    <div className={className}>
      {label && <span className="text-gray-500 text-sm">{label}</span>}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        className={baseClass}
        {...props}
      />
    </div>
  );
};

interface SelectInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{ label: string; value: string }>;
  className?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
  className = '',
  ...props
}) => {
  const baseClass = 'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

  return (
    <div className={className}>
      {label && <label className="text-gray-500 text-sm">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={baseClass}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface CheckboxInputProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  label,
  checked,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300"
        {...props}
      />
      {label && <label className="text-gray-600 text-sm">{label}</label>}
    </div>
  );
};
