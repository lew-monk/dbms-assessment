import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
  const [studentClick, setStudentClick] = useState(false);

  const handleStudentsClick = () => {
    studentClick ? setStudentClick(false) : setStudentClick(true);
  };

  return (
    <div className="ml-2">
      <h1 className="text-2xl font-bold text-blue-900 mb-10">Menu</h1>
      <div className="mb-6 cursor-pointer" onClick={handleStudentsClick}>
        <h1 className="font-bold">Students</h1>
        {studentClick && (
          <div className="my-2 ml-4 space-y-2">
            <div className="text-sm font-semibold">
              <Link href="/student">Register Student</Link>
            </div>
            <div className="text-sm font-semibold">
              <Link href="/student/students">All Students</Link>
            </div>
            <div className="text-sm font-semibold">Check Payment</div>
          </div>
        )}
      </div>
      <div className="mb-6">
        <h1 className="font-bold">
          <Link href="/department">Department</Link>
        </h1>
      </div>
      <div className="mb-6">
        <h1 className="font-bold">
          <Link href="/course">Course</Link>
        </h1>
      </div>
      <div>
        <h1 className="font-bold">
          <Link href="/units">Units</Link>
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
