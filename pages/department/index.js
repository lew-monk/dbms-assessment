import React, { useState } from "react";

//Package Imports
import { useForm } from "react-hook-form";

const index = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="w-full h-full flex bg-gray-100">
      <div className="w-1/6">Details</div>

      {/* Beginning of the Form Section  */}
      <div className="flex-1 shadow-2xl h-full bg-gray-50 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full items-center w-full justify-center"
        >
          {/* Beginning of the Department name Section  */}
          <div className="name mx-auto w-11/12 pb-10">
            <div className="mb-4">
              <label>Department Name</label>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                {...register("department-name")}
              />
            </div>
          </div>
          {/* End of the Department name Section  */}
          <div className="mx-auto w-11/12">
            <input
              type="submit"
              value="Register"
              className="w-full h-10 bg-blue-400 rounded-md"
            />
          </div>
        </form>
      </div>
      {/* End of the Form Section  */}
    </div>
  );
};

export default index;
