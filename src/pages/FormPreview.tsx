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
        <MainSection title='Form Preview' subTitle="Preview and test your custom form" >
            <FormPreview fields={fields} />
        </MainSection>
    );
};

export default FormPreviewPage;