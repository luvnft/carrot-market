import React from 'react';
import type { NextPage } from 'next';
import Button from '@components/button';
import Input, { InputProps } from '@components/input';
import Layout from '@components/layout';
import TextArea from '@components/textarea';

const CustomInput: React.FC<InputProps> = ({ register, ...otherProps }) => {
  return <input ref={register} {...otherProps} />;
};

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="space-y-4 py-10 px-4">
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
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
