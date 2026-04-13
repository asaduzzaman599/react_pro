import type { FormField } from "../../types/form";
import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../todo-list/PrimaryButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import FormBuilderField from "./FormBuilderField";
import { FormPreview } from "./FormBuilderPreview";
import Card from "../Card";
import { resetFields, setForm } from "../../store/form/formSlice";

type FormValues = {
  fields: FormField[];
};

export default function FormBuilder() {
  const dispatch = useDispatch();

  const savedFields = useSelector((state: any) => state.form.fields);

  const { control, register, watch, reset } = useForm<FormValues>({
    defaultValues: {
      fields: savedFields || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const formValues = watch("fields");

  useEffect(() => {
    if (savedFields?.length > 0) {
      reset({ fields: savedFields });
    }
  }, [savedFields, reset]);

  const handleSave = () => {
    dispatch(setForm(formValues));
  };

  const handleClear = () => {
    reset({ fields: [] });
    dispatch(resetFields());
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
 
      <div>
        <div className="flex justify-between items-center mb-4 h-10">
          <h2 className="text-xl">Form Fields</h2>

          <PrimaryButton
            onClick={() =>
              append({
                label: "",
                type: "text",
                options: [],
                required: false,
              })
            }
            icon={PlusIcon}
          >
            Add Field
          </PrimaryButton>
        </div>

        {fields.length === 0? (
          <Card>
            <p className="text-gray-500">
              No fields added yet. Click "Add Field"
            </p>
          </Card>
        ):
        <div>
        <div className="flex flex-col gap-4">
          {fields.map((field, index) => (
              <FormBuilderField
              key={field.id}
              index={index}
              field={field}
              register={register}
              control={control}
              watch={watch}
              remove={remove}
              />
            ))}
        </div>
        <div className="flex gap-2 my-4">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-3 py-2 rounded cursor-pointer"
          >
            Save Form
          </button>

          <button
            onClick={handleClear}
            className="bg-red-600 text-white px-3 py-2 rounded  cursor-pointer"
          >
            Clear Form
          </button>
        </div>
            </div>
        
        }
      </div>

      <div>
        <div className="flex justify-between items-center mb-4 h-10">
          <h2 className="text-xl">Live Preview</h2>
        </div>
        <FormPreview fields={formValues} />
      </div>
    </div>
  );
}