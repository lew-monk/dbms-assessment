import axios from "axios";
import React, { useState, useEffect } from "react";

//Pckage Imports
import { useForm } from "react-hook-form";

const EmployeeDetails = ({ data }) => {
  useEffect(() => {
    setDepartment(data.rows);
  }, []);

  const { handleSubmit, register } = useForm();
  const [lecturerView, setLecturerView] = useState(false);
  const [workersView, setWorkersView] = useState(false);
  const [department, setDepartment] = useState([]);
  const [employeeType, setEmployeeType] = useState();
  const areas = ["grounds", "kitchen", "front-office", "secretary"];

  const onSubmit = (data) => {
    data.employeeType = employeeType;
    axios({
      method: "POST",
      url:
        "http://localhost:3000/api/employee" ||
        `${process.env.API_URL}employee`,
      data,
    })
      .then((resposne) => console.log(resposne))
      .catch((err) => console.log(err));
  };

  const handleLecturerCheckBoxChange = () => {
    lecturerView ? setLecturerView(false) : setLecturerView(true),
      setWorkersView(false),
      setEmployeeType("Lecturer");
  };
  const handleStaffCheckBoxChange = () => {
    workersView ? setWorkersView(false) : setWorkersView(true),
      setEmployeeType("Staff"),
      setLecturerView(false);
  };

  return (
    <div className="flex w-full h-full bg-gray-100 overflow-y-scroll">
      <div className="w-1/4">Details</div>
      <div className="flex-1 bg-gray-50 shadow-2xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pb-10 h-full w-full justify-center flex flex-col"
        >
          {/* Beginning of student details  */}
          <div className="student border-b-2 border-gray-200 my-4">
            <h1 className="text-xl font-bold mb-4">EMPLOYEE DETAILS</h1>
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
                    {...register("age")}
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
                    {...register("gender")}
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

          {/* Beginning of the Employee CheckBox  registration  */}
          <div className="units border-b-2 border-gray-200 my-4">
            <h1 className="font-bold text-2xl mb-4">Choose Employee</h1>
            <div className="names flex w-11/12 m-auto">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  value="Lecturer"
                  name="Lecturer"
                  onClick={handleLecturerCheckBoxChange}
                  // {...register(unit[1])}
                />
                <label>Lecturer</label>
              </div>

              <div className="space-x-2 ml-10">
                <input
                  type="checkbox"
                  value="Lecturer"
                  name="Employee"
                  onClick={handleStaffCheckBoxChange}
                  // {...register(unit[1])}
                />
                <label>Staff</label>
              </div>
            </div>
          </div>
          {/* End of the Units registration  */}

          {/* Beginning of the Lectures Section  */}
          {lecturerView && (
            <div className="names flex w-11/12 m-auto mb-12 ">
              {/* Beginning of the first name  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>Title</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("title")}
                  />
                </div>
              </div>

              {/* End of the first name  */}

              {/* Beginning of the last name  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Department</label>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    {...register("Department")}
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                  >
                    {department.length < 1 ? (
                      <option>No Departments Available</option>
                    ) : (
                      department.map((depart) => (
                        <option
                          key={depart[0]}
                          value={depart[0]}
                          className="w-full"
                        >
                          {depart[1]}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* End of the last name  */}
            </div>
          )}
          {/* End of the Lectures Section  */}

          {/* Beginning of the Staff Section  */}
          {workersView && (
            <div className="names flex w-11/12 m-auto mb-12 ">
              {/* Beginning of the first name  */}

              <div className="name flex-1">
                <div className="mb-2">
                  <label>Title</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                    {...register("title")}
                  />
                </div>
              </div>

              {/* End of the first name  */}

              {/* Beginning of the last name  */}
              <div className="name flex-1">
                <div className="mb-2">
                  <label>Area</label>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    {...register("area")}
                    className="w-3/4 h-10 focus:outline-none focus:ring focus:border-blue-300 border border-gray-300 rounded-md"
                  >
                    {areas.length < 1 ? (
                      <option>No Departments Available</option>
                    ) : (
                      areas.map((area) => (
                        <option key={area} value={area} className="w-full">
                          {area}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* End of the last name  */}
            </div>
          )}
          {/* End of the Staff Section  */}

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
    url: "http://localhost:3000/api/department/getAll",
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data,
    },
  };
};

export default EmployeeDetails;
