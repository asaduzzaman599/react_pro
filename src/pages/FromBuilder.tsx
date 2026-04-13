import React from 'react';
import MainSection from '../components/MainSection';
import FormBuilder from '../components/form-builder/FormBuilderForm';

const FromBuilderPage = () => {
    return (
        <MainSection title='Form Builder' subTitle='Create custom forms by adding and configuring fields'>
           <FormBuilder />
        </MainSection>
    );
};

export default FromBuilderPage;