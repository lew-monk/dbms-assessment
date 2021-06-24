import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div>
      <h1>SideBar</h1>
      <div>
        <h1>
          <Link href="/student">Studentts</Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link href="/department">Department</Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link href="/course">Course</Link>
        </h1>
      </div>
      <div>
        <h1>
          <Link href="/units">Units</Link>
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
