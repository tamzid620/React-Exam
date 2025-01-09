import React from "react";
import "../../Styles/style.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CustomTable = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const dataPerpage = 5;

  useEffect(() => {
    axios
      .get("https://api.razzakfashion.com/")
      .then((res) => res.data)
      .then((data) => setTableData(data.data));
  }, []);

  const defaultPageNumber = (currentPage - 1) * dataPerpage;
  const pageData = tableData.slice(defaultPageNumber, defaultPageNumber + dataPerpage);

  const totalPage = Math.ceil(tableData.length / dataPerpage);

  const handlepagination = (td) => {
    setCurrentpage(td);
  };

  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold underline mb-5">
        Custom Table!
      </h1>
      {/*<<<<<<<<<<<<<<<< table section >>>>>>>>>>>>>>>>>> */}
      <div className="overflow-x-auto">
        {/* search section -------------------------------- */}
        <div className="bg-gray-200 px-2 py-4 border border-black">
          <input className="py-1 drop-shadow-lg" type="text" value="" />
          <button className="ms-3 bg-green-500 hover:bg-green-600 px-4 py-1 rounded-sm text-white uppercase drop-shadow-lg">
            Search
          </button>
        </div>

        {/* Table --------------------------------- */}
        <table>
          <thead className="leading-10 bg-gray-200 uppercase border border-black text-center">
            <th className="text-[9px]">index</th>
            <th>name</th>
            <th>email</th>
            <th>email verified at</th>
            <th>created at</th>
            <th>updated at</th>
          </thead>
          {pageData.map((tdata) => (
            <tbody key={tdata?.id} className="leading-[50px] text-center">
              <td>{tdata?.id}</td>
              <td>{tdata?.name}</td>
              <td>{tdata?.email}</td>
              <td>{tdata?.email_verified_at}</td>
              <td>{tdata?.created_at}</td>
              <td>{tdata?.updated_at}</td>
            </tbody>
          ))}
        </table>
        {/* pagination section -------------------------------- */}
        <div className="bg-gray-200 px-2 py-4 border border-black flex justify-end">
          {Array.from({ length: totalPage }, (_, index) => (
            <button
              key={index}
              onClick={() => handlepagination(index + 1)}
              className={`mx-1 px-3 py-1 rounded-sm ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black hover:bg-blue-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
