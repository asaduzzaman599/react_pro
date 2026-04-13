import React, { useEffect } from "react";
import Card from "../Card";
import {
  type Control,
  type UseFormRegister,
 type UseFormWatch,
  useFieldArray,
} from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  index: number;
  field: any;
  register: UseFormRegister<any>;
  control: Control<any>;
  watch: UseFormWatch<any>;
  remove: (index: number) => void;
};

const FormBuilderField = ({
  index,
  register,
  control,
  watch,
  remove,
}: Props) => {
  const options = [
    { title: "Text", value: "text" },
    { title: "Textarea", value: "textarea" },
    { title: "Select", value: "select" },
    { title: "Checkbox", value: "checkbox" },
  ];

  const fieldType = watch(`fields.${index}.type`);
  const currentField = watch(`fields.${index}`);

  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `fields.${index}.options`,
  });

  useEffect(() => {
    if (fieldType === "select" && optionFields.length === 0) {
      appendOption({ value: "Option 1" });
    }
  }, [fieldType]);

  return (
    <Card>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">
            #{index + 1} {currentField?.label || "Untitled Field"}
          </h3>

          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500"
          >
            <XMarkIcon className="h-7 w-7 text-red-600 " />
          </button>
        </div>

        <div>
          <span className="text-gray-500 text-sm">Field Label</span>
          <input
            type="text"
            {...register(`fields.${index}.label`)}
            placeholder="Enter field label"
           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        </div>

        <div>
          <label className="text-gray-500 text-sm">Type</label>

          <div className="relative mt-2">
            <select
              {...register(`fields.${index}.type`)}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title}
                </option>
              ))}
            </select>

           
          </div>
        </div>

        {fieldType === "select" && (
          <div className="mt-4">
            <label className="text-gray-500 text-sm">Options</label>

            <div className="flex flex-col gap-2 mt-2">
              {optionFields.map((opt, optIndex) => (
                <div key={opt.id} className="flex gap-2 items-center">
                  <input
                    type="text"
                    {...register(
                      `fields.${index}.options.${optIndex}.value`
                    )}
                    placeholder={`Option ${optIndex + 1}`}
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
       
                  />

                  <button
                    type="button"
                    onClick={() => removeOption(optIndex)}
                    className="text-red-500 cursor-pointer"
                  >
                    <XMarkIcon className="h-7 w-7 text-red-600 " />
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                appendOption({
                  value: `Option ${optionFields.length + 1}`,
                })
              }
              className="mt-2 text-blue-600"
            >
              + Add option
            </button>
          </div>
        )}

<div className="flex items-center gap-2 mt-3">
  <input
    type="checkbox"
    {...register(`fields.${index}.required`)}
    className="h-4 w-4"
  />

  <label className="text-gray-600 text-sm">
    Required field
  </label>
</div>
      </div>
    </Card>
  );
};

export default FormBuilderField;