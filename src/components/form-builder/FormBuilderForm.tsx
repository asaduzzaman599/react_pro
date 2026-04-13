import type { FormField } from "../../types/form";
import { useForm, useFieldArray } from "react-hook-form";
import PrimaryButton from "../todo-list/PrimaryButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import FormBuilderField from "./FormBuilderField";
import { FormPreview } from "./FormBuilderPreview";
import Card from "../Card";

type FormValues = {
  fields: FormField[];
};

export default function FormBuilder() {
  const { control, register, watch } = useForm<FormValues>({
    defaultValues: {
      fields: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  
  const formValues = watch("fields");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
      
      <div>
        <div className="flex justify-between items-center mb-4 col-span-full h-10">
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

        {fields.length === 0 && (
          <Card>
            <p className="text-gray-500">
            No fields added yet. Click "Add Field"
          </p>
          </Card>
        )}

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
      </div>

      <div>
        <div className="flex justify-between items-center mb-4 col-span-full  h-10">
        <h2 className="text-xl">Live Preview</h2>
      </div>
          <FormPreview fields={formValues} />
      </div>
    </div>
  );
}