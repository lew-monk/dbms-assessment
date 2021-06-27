import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { data } from "autoprefixer";

const index = () => {
  useEffect(() => {
    // setUnits(data.rows);
    axios({
      method: "GET",
      url: "http://localhost:3000/api/unit/getCourseUnits",
    })
      .then((response) => setUnits(response.data.response.rows))
      .catch((err) => console.log(err.message));
  }, []);

  const router = useRouter();
  const [units, setUnits] = useState([]);

  const { course } = router.query;
  parseInt(course);
  console.log(course);
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-10">Hello Register Units Here</h1>
      <div>
        {units.length < 1 ? (
          <h1>No units Available</h1>
        ) : (
          <div>
            {units
              .filter((unit) => unit[1] == course)
              .map((unit) => (
                <div key={unit[0]} className="space-y-2">
                  <div className="space-y-4 space-x-2">
                    <input type="checkbox" name="" id="" />
                    <label>{unit[3]}</label>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

// export const getStaticPaths = async () => {
//   const results = await axios({
//     method: "GET",
//     url: "http://localhost:3000/api/unit/getID",
//   });

//   const paths = results.data.response.rows.map((unit) => {
//     return {
//       params: { id: unit.toString() },
//     };
//   });

//   return { paths, fallback: false };
// };
// export const getStaticProps = async ({ params }) => {
//   const { id } = params;
//   parseInt(id);
//   const results = await axios({
//     method: "GET",
//     url: "http://localhost:3000/api/unit/getCourseUnits",
//   });
//   return {
//     props: {
//       data: results.data.response,
//     },
//   };
// };

export default index;
