import React from 'react';
import type { NextPage } from 'next';
import Button from '@components/button';
import Input from '@components/input';
import Layout from '@components/layout';
import TextArea from '@components/textarea';

type InputProps = {
  register?: any; // or the specific type expected for register
  required: boolean;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  kind?: string;
  // Add any other expected properties here
};

const CustomInput: React.FC<InputProps> = ({ register, ...otherProps }) => {
  return <input ref={register} {...otherProps} />;
};

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="Upload Product">
      <form className="p-4 space-y-4">
        <div>
          <label className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              {/* ...SVG code */}
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>
        <CustomInput required label="Name" name="name" type="text" />
        <CustomInput
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Upload item" />
      </form>
    </Layout>
  );
};

export default Upload;
