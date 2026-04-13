import React from "react";
import { useForm } from "react-hook-form";
import Card from "../Card";

type FieldType = "text" | "textarea" | "select" | "checkbox";

type FormField = {
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string }[];
};

type Props = {
  fields: FormField[];
  isLivePreview?: boolean;
};

export const FormPreview = ({ fields, isLivePreview }: Props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("FORM SUBMIT:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const Preview = (<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {fields?.map((field, index) => (
          <div key={index}>
            
            <label className="block text-sm font-medium mb-1">
              {field.label || "Untitled Field"}
              {field.required && (
                <span className="text-red-500"> *</span>
              )}
            </label>

            {field.type === "text" && (
              <input
                {...register(`field_${index}`, {
                  required: field.required,
                })}
                placeholder={`Enter ${field.label || "Untitled Field"}`}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            )}

            {field.type === "textarea" && (
              <textarea
                {...register(`field_${index}`, {
                  required: field.required,
                })}
                placeholder={`Enter ${field.label || "Untitled Field"}`}
               className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            )}

            {field.type === "select" && (
              <select
                {...register(`field_${index}`, {
                  required: field.required,
                })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="">Select</option>
                {field.options?.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.value}
                  </option>
                ))}
              </select>
            )}

            {field.type === "checkbox" && (
              <label htmlFor="" className="flex items-center gap-4">
                <input
                type="checkbox"
                {...register(`field_${index}`, {
                  required: field.required,
                })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              /> {field.label || "Untitled Field"}
              </label>

            )}

          </div>
        ))}

{isLivePreview ? null :<div className="flex gap-2">

        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-2 rounded"
          >
          Submit
        </button>
        
        <button
        type="button"
          className="bg-red-600 text-white px-3 py-2 rounded"
          onClick={() => reset()}
          >
          Reset
        </button>
            </div>}

      </form>)
  return (
    <Card>
        {fields.length === 0 ? (
          <p className="text-gray-500">
            No fields to preview. Add fields to see live preview.
          </p>
        ) : (
          Preview
        )}

      
    </Card>
  );
};

export default FormPreview;