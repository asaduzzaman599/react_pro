import React, { useMemo } from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import Card from '../Card';
import FormBuilderField from './FormBuilderField';
import { FormPreview } from './FormBuilderPreview';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Control } from 'react-hook-form';

const FormBuilder: React.FC = () => {
  const { control, register, watch, fields, remove, handleSave, handleClear, handleAddField } =
    useFormBuilder();
  const formValues = watch('fields');

  const hasFields = useMemo(() => fields.length > 0, [fields.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
      <div>
        <div className="flex justify-between items-center mb-4 h-10">
          <h2 className="text-xl">Form Fields</h2>
          <button
            onClick={handleAddField}
            className="flex gap-2 h-10 items-center rounded-lg bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition"
          >
            <PlusIcon className="size-5" />
            Add Field
          </button>
        </div>

        {!hasFields ? (
          <Card>
            <p className="text-gray-500">No fields added yet. Click "Add Field"</p>
          </Card>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {fields.map((field, index) => (
                <FormBuilderField
                  key={field.id}
                  index={index}
                  field={field}
                  register={register}
                  control={control as unknown as Control}
                  watch={watch}
                  remove={remove}
                />
              ))}
            </div>
            <div className="flex gap-2 my-4">
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded cursor-pointer transition"
              >
                Save Form
              </button>
              <button
                onClick={handleClear}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded cursor-pointer transition"
              >
                Clear Form
              </button>
            </div>
          </>
        )}
      </div>

      <div>
        <div className="flex justify-between items-center mb-4 h-10">
          <h2 className="text-xl">Live Preview</h2>
        </div>
        <div className="md:sticky md:top-0 md:h-screen overflow-auto mb-4">
          <FormPreview fields={formValues} isLivePreview={true} />
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;