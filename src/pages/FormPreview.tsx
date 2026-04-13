import { useSelector } from "react-redux";
import MainSection from "../components/MainSection";
import type { FormField } from "../types/form";
import type { RootState } from "../store";
import FormPreview from "../components/form-builder/FormBuilderPreview";

const FormPreviewPage = () => {
  const fields: FormField[] = useSelector(
    (state: RootState) => state.form.fields
  );
    return (
        <MainSection title='Dynamic Form Builder' subTitle="Create custom forms by adding and configuring fields" >
            <FormPreview fields={fields} />
        </MainSection>
    );
};

export default FormPreviewPage;