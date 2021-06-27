import axios from "axios";
import React, { useEffect, useState } from "react";

const StudentGaurdian = ({ data }) => {
  useEffect(() => {
    setGaurdian(data.rows);
  }, []);

  const [gaurdian, setGaurdian] = useState([]);
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div>
        {gaurdian.length < 1 ? (
          <h1>No Gaurdian Available</h1>
        ) : (
          <div>
            {gaurdian.map((parent) => (
              <div>
                <div>ID: {parent[0]}</div>
                <div>First Name: {parent[1]}</div>
                <div>Last Name: {parent[2]}</div>
                <div>Contact: {parent[3]}</div>
                <div>Gender: {parent[4]}</div>
                <div>Student: {parent[5]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const results = await axios({
    method: "GET",
    url: "http://localhost:3000/api/gaurdian/getID",
  });

  const paths = results.data.response["rows"].map((path, index) => {
    return {
      params: {
        id: path[index].toString(),
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  parseInt(id);
  const results = await axios({
    method: "GET",
    url: `http://localhost:3000/api/gaurdian/${id}`,
    params: {
      id,
    },
  });

  return {
    props: {
      data: results.data.response,
    },
  };
};

export default StudentGaurdian;
