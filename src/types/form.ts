export type FieldType = 'text' | 'textarea' | 'select' | 'checkbox';

export interface FormField {
  label: string;
  type: FieldType;
  options?: Array<{ value: string }>;
  required?: boolean;
}

export interface FormConfig {
  fields: FormField[];
}

export interface FormSubmitData {
  [key: string]: string | boolean | string[];
}
