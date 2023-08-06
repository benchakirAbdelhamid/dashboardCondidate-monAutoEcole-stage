import React from "react";
import TableUsersDesktop from "../components/TableUsersDesktop";
import TableUsersTelephone from "../components/TableUsersTelephone";
import NavTopTable from "../components/NavTopTable";
import Pagination from "../components/Pagination";

const input_checkbox = (
  <div className="inline-flex items-center">
  <label
    className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
    htmlFor="checkbox"
    data-ripple-dark="true"
  >
    <input
      type="checkbox"
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
      id="checkbox"
    />
    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  </label>
</div>

);



const TABLE_HEAD = [
  input_checkbox,
  "Categorie",
  "Type",
  "Date examen",
  "Pret pour examen",
  "Action",
];

const TABLE_ROWS = [
  {
    id: "CD9801",
    categorie: "B",
    type: "Code",
    date_examen: "02/02/2023",
    pret_pout_examen: "Pas encore",
  },
  {
    id: "CD9222",
    categorie: "A",
    type: "Code",
    date_examen: "02/08/2053",
    pret_pout_examen: "Pas encore",
  },
  {
    id: "CD95484",
    categorie: "C",
    type: "Code",
    date_examen: "02/09/2003",
    pret_pout_examen: "Pas encore",
  },
];

const Condidates = () => {
  return (
    <div className="p-4">
      <h3 className="title">Les condidates</h3>

      <NavTopTable />

      <div className="h-full w-full">
        <div className="display_non_md">
          <TableUsersDesktop
            infoColumnsCandidate={TABLE_HEAD}
            infoCondidate={TABLE_ROWS}
          />
        </div>

        <div className="display_non_lg">
          <TableUsersTelephone
            infoColumnsCandidate={TABLE_HEAD}
            infoCondidate={TABLE_ROWS}
          />
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Condidates;
