import axios from "axios";
import React, { useState, useEffect } from "react";

//Pckage Imports
import { useForm } from "react-hook-form";

const StudentDetails = ({ data, data1 }) => {
  useEffect(() => {
    setUnits(data.rows);
    setCourses(data1.rows);
  }, []);

  const [courses, setCourses] = useState([]);
  const [units, setUnits] = useState([]);
  const { handleSubmit, register } = useForm();
  const [regUnits, setRegUnits] = useState([]);

  const onSubmit = (data) => {
    data.registeredUnits = regUnits;

    axios({
      method: "POST",
      url: "http://localhost:3000/api/student",
      data,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  };

  const handleCheckBoxChange = (unit) => {
    if (regUnits.includes(unit)) {
      setRegUnits(regUnits.filter((unitsToKeep) => unitsToKeep != unit));
    } else {
      setRegUnits((arr) => [...arr, unit]);
    }
  };

  return (
    <div className="flex w-full h-full bg-gray-100 overflow-y-scroll">
      <div className="w-1/4">Details</div>
      <div className="flex-1 bg-gray-50 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
          {/* Beginning of student details  */}
          <div className="student border-b-2 border-gray-200 my-4">
            <h1 className="text-xl font-bold mb-4">STUDENT DETAILS</h1>
            <div className="names flex w-11/12 m-auto">
              {/* Beginning of the first name  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>First Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("first-name")}
                  />
                </div>
              </div>

              {/* End of the first name  */}

              {/* Beginning of the last name  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Last Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="last-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("last-name")}
                  />
                </div>
              </div>

              {/* End of the last name  */}
            </div>

            {/* Beginning of the Age Section  */}
            <div className="names flex w-11/12 mx-auto my-4">
              {/* Beginning of the Age Section  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>Age</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="Age"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("students-age")}
                  />
                </div>
              </div>

              {/* End of the Age Section  */}

              {/* Beginning of the Sex Action  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Sex</label>
                </div>
                <div>
                  <select
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("students-gender")}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              {/* End of the Sex Section  */}
            </div>
            {/* End of the Age Section  */}

            {/* Beginning of Course Registration  */}
            <div className="name flex-1 mx-auto w-11/12 pb-10">
              <div>
                <label>Course</label>
              </div>
              <div>
                <select
                  className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                  {...register("course")}
                >
                  {courses.length < 1 ? (
                    <option>No Courses Available</option>
                  ) : (
                    courses.map((course) => (
                      <option value={course[2]} key={course[2]}>
                        {course[0]}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
            {/* End of Course Registration  */}
          </div>
          {/* End of student details  */}

          {/* Beginning of the Gaurdian Section  */}
          <div className="gaurdian border-b-2 border-gray-200 my-4">
            <h1 className="text-2xl font-bold">Gaurdian Details</h1>
            <div className="names flex w-11/12 m-auto">
              {/* Beginning of the first name  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>First Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("gaurdian-first-name")}
                  />
                </div>
              </div>

              {/* End of the first name  */}

              {/* Beginning of the last name  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Last Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="last-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("gaurdian-last-name")}
                  />
                </div>
              </div>

              {/* End of the last name  */}
            </div>
            <div className="names flex w-11/12 mx-auto my-4">
              {/* Beginning of the Age Section  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>Age</label>
                </div>
                <div>
                  <input
                    type="number"
                    name="Age"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("gaurdian-age")}
                  />
                </div>
              </div>

              {/* End of the Age Section  */}

              {/* Beginning of the Sex Action  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Sex</label>
                </div>
                <div>
                  <select
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("gaurdian-gender")}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              {/* End of the Sex Section  */}
            </div>

            {/* Beginning of the Contact Section  */}
            <div className="name flex-1 mx-auto w-11/12 pb-10">
              <div>
                <label>Contact</label>
              </div>
              <div>
                <input
                  type="number"
                  className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                  {...register("tel")}
                />
              </div>
            </div>
            {/* End of the Contact Section  */}
          </div>
          {/* End of the Gaurdian Section  */}

          {/* Beginning of the Units registration  */}
          <div className="units border-b-2 border-gray-200 my-4">
            <h1 className="font-bold text-2xl mb-4">Units Registration</h1>
            <div className="names flex w-11/12 m-auto">
              {units.length < 1 ? (
                <h1>No Units Added</h1>
              ) : (
                units.map((unit) => (
                  <div className="space-y-2" key={unit[0]}>
                    <input
                      type="checkbox"
                      value={unit[0]}
                      name={unit[1]}
                      onClick={() => handleCheckBoxChange(unit)}
                      // {...register(unit[1])}
                    />
                    <label> {unit[1]}</label>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* End of the Units registration  */}
          <div className="mx-auto flex-1 w-11/12">
            <input
              type="submit"
              value="Register"
              className="w-full pb-10 h-10 bg-blue-400 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios({
    method: "GET",
    url:
      "http://localhost:3000/api/unit/getAll" ||
      `${process.env.API_URL}unit/getAll`,
  });

  const data1 = await axios({
    method: "GET",
    url:
      "http://localhost:3000/api/course/getAll" ||
      `${process.env.API_URL}unit/getAll`,
  });

  return {
    props: {
      data: data.data.response,
      data1: data1.data.response,
    },
  };
};

export default StudentDetails;
