import React from 'react';
import type { NextPage } from 'next';
import Button from '@components/button';
import Layout from '@components/layout';
import TextArea from '@components/textarea';

interface CustomInputProps {
  register: any; // Replace 'any' with the correct type for 'register'
  [key: string]: any; // Adjust this to match the expected props for the input element
}

const CustomInput: React.FC<CustomInputProps> = ({ register, ...otherProps }) => {
  return <input ref={register} {...otherProps} />;
};

const Create: NextPage = () => {
  // Assuming 'register' is obtained from some form library like React Hook Form
  const { register } = useForm(); // Import the useForm hook from your form library

  return (
    <Layout canGoBack title="Go Live">
      <form className="space-y-4 py-10 px-4">
        <CustomInput register={register} required label="Name" name="name" type="text" />
        <CustomInput
          register={register}
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
