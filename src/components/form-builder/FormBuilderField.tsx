import React, { useEffect, useMemo, useCallback } from 'react';
import type { Control, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Card from '../Card';

interface FormBuilderFieldProps {
  index: number;
  field: any;
  register: UseFormRegister<any>;
  control: Control<any>;
  watch: UseFormWatch<any>;
  remove: (index: number) => void;
}

const FIELD_TYPE_OPTIONS = [
  { label: 'Text', value: 'text' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'Select', value: 'select' },
  { label: 'Checkbox', value: 'checkbox' },
];

const FormBuilderField: React.FC<FormBuilderFieldProps> = ({
  index,
  register,
  control,
  watch,
  remove,
}) => {
  const fieldType = watch(`fields.${index}.type`);
  const currentField = watch(`fields.${index}`);

  const { fields: optionFields, append: appendOption, remove: removeOption } = useFieldArray({
    control,
    name: `fields.${index}.options`,
  });

  useEffect(() => {
    if (fieldType === 'select' && optionFields.length === 0) {
      appendOption({ value: 'Option 1' });
    }
  }, [fieldType, optionFields.length, appendOption]);

  const handleAddOption = useCallback(() => {
    appendOption({ value: `Option ${optionFields.length + 1}` });
  }, [appendOption, optionFields.length]);

  const inputClass = useMemo(
    () =>
      'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
    []
  );

  return (
    <Card>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">
            #{index + 1} {currentField?.label || 'Untitled Field'}
          </h3>
          <button type="button" onClick={() => remove(index)} className="text-red-500">
            <XMarkIcon className="h-7 w-7 text-red-600" />
          </button>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Field Label</span>
          <input
            type="text"
            {...register(`fields.${index}.label`)}
            placeholder="Enter field label"
            className={inputClass}
          />
        </div>

        <div>
          <label className="text-gray-500 text-sm">Type</label>
          <select {...register(`fields.${index}.type`)} className={inputClass}>
            {FIELD_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {fieldType === 'select' && (
          <div className="mt-4">
            <label className="text-gray-500 text-sm">Options</label>
            <div className="flex flex-col gap-2 mt-2">
              {optionFields.map((opt, optIndex) => (
                <div key={opt.id} className="flex gap-2 items-center">
                  <input
                    type="text"
                    {...register(`fields.${index}.options.${optIndex}.value`)}
                    placeholder={`Option ${optIndex + 1}`}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={() => removeOption(optIndex)}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                  >
                    <XMarkIcon className="h-7 w-7" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddOption}
              className="mt-2 text-blue-600 hover:text-blue-700 transition"
            >
              + Add option
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 mt-3">
          <input
           id={`fields.${index}.required`}
            type="checkbox"
            {...register(`fields.${index}.required`)}
            className="h-4 w-4"
          />
          <label htmlFor={`fields.${index}.required`} className="text-gray-600 text-sm cursor-pointer">
            Required field
          </label>
        </div>
      </div>
    </Card>
  );
};

export default FormBuilderField;