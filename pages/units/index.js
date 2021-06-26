import axios from "axios";
import React, { useState, useEffect } from "react";

//Package Imports
import { useForm } from "react-hook-form";

const index = ({ data }) => {
  useEffect(() => {
    setCourses(data.rows);
  }, []);

  const [courses, setCourses] = useState([]);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/unit",
      data,
    })
      .then((resposne) => console.log(resposne))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="w-full h-full flex bg-gray-100">
      <div className="w-1/6">Details</div>

      {/* Beginning of the Form Section  */}
      <div className="flex-1 shadow-2xl h-full bg-gray-50 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col h-full items-center w-full justify-center"
        >
          {/* Beginning of the Course name Section  */}
          <div className="name mx-auto w-11/12 pb-4">
            <div className="mb-2">
              <label>Unit Name</label>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                {...register("Unit-name")}
              />
            </div>
          </div>
          {/* End of the Course name Section  */}

          {/* Beginning of the Department name Section  */}
          <div className="name mx-auto w-11/12 pb-10">
            <div className="mb-2">
              <label>Course</label>
            </div>
            <div>
              {courses.length < 1 ? (
                <h1>No courses Available</h1>
              ) : (
                <select
                  name=""
                  id=""
                  className="w-full h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                  {...register("course")}
                >
                  {courses.map((course) => (
                    <option key={course} value={course[2]}>
                      {course[0]}
                    </option>
                  ))}
                </select>
              )}
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

export const getStaticProps = async () => {
  const data = await axios({
    method: "GET",
    url:
      "http://localhost:3000/api/course/getAll" ||
      process.env.APP_URL + "course/getAll",
  });
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data.response,
    },
  };
};

export default index;
