import axios from "axios";
import React, { useState, useEffect } from "react";

//Package imports
import Link from "next/link";

//Local imports

const students = ({ data }) => {
  useEffect(() => {
    setStudents(data.rows);
  }, []);

  const [students, setStudents] = useState([]);

  return (
    <div className="h-full w-full flex flex-col">
      <div className="mb-12">
        <h1>All Students</h1>
      </div>
      <div>
        {students.length < 1 ? (
          <h1>No students have been Registered Yet</h1>
        ) : (
          students.map((student) => (
            <div
              key={student[0]}
              className="mb-4 border-b-2 border-gray-100 h-12 flex space-x-10"
            >
              <div>{student[1]}</div>
              <div>{student[2]}</div>
              <div>{student[3]}</div>
              <div>{student[4]}</div>
              <div>{student[5]}</div>
              <div>{student[8]}</div>
              <div>{student[12]}</div>
              <div className="cursor-pointer text-blue-300 underline">
                <Link href={`/student/gaurdian/${student[7]}`}>Gaurdian</Link>
              </div>
              <div className="cursor-pointer text-blue-300 underline">
                <Link
                  href={{
                    pathname: `/student/register-units/${student[0]}/register`,
                    query: { course: student[10] },
                  }}
                >
                  Registered Units
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios({
    method: "GET",
    url: "http://localhost:3000/api/student/getAll",
  });

  return {
    props: {
      data: data.data.response,
    },
  };
};

export default students;
