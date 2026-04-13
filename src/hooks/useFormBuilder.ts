import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setForm, resetFields } from '../store/form/formSlice';
import type { FormField } from '../types/form';

type FormValues = {
  fields: FormField[];
};

export const useFormBuilder = () => {
  const dispatch = useDispatch();
  const savedFields = useSelector((state: any) => state.form.fields);

  const { control, register, watch, reset } = useForm<FormValues>({
    defaultValues: {
      fields: savedFields || [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fields',
  });

  const formValues = watch('fields');

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

  const handleAddField = () => {
    append({
      label: '',
      type: 'text',
      options: [],
      required: false,
    });
  };

  return {
    control,
    register,
    watch,
    fields,
    formValues,
    append,
    remove,
    handleSave,
    handleClear,
    handleAddField,
  };
};
