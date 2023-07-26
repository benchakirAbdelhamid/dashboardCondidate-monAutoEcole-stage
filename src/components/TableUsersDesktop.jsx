import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { BiLogoDiscourse } from "react-icons/bi";
import {
  AiFillAmazonCircle,
  AiOutlineMenu,
  AiOutlineEdit,
} from "react-icons/ai";
import DropDown from "./DropDown";
import { BsDot } from "react-icons/bs";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const TableUsersDesktop = (props) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <CardBody className=" display_non_md overflow-x-scroll px-0 content_table">
        <table className="  mt-1 w-full min-w-max table-auto text-left ">
          <thead className="border_bottom">
            <tr>
              {props.infoColumnsCandidate.map((head) => (
                <th key={head} className=" p-4">
                  <Typography
                    variant="small"
                    className="title_table font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.infoCondidate.map(
              (
                { id, categorie, type, date_examen, pret_pout_examen },
                index
              ) => {
                return (
                  <tr key={id} className="border_bottom_gray">
                    <td className="p-6 flex  gap-3">
                      <div className="inline-flex ">
                        <label
                          className="relative  flex cursor-pointer items-center rounded-full "
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
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {categorie}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {type}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {date_examen}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography
                        variant="small"
                        className="font-normal text_padg_examen flex"
                      >
                        <BsDot style={{'fontSize':'20px'}}  /> {pret_pout_examen}
                      </Typography>
                    </td>

                    <td >
                      <DropDown
                        row={[
                          {
                            id: 1,
                            name: "demander de reporter",
                            icon: <AiOutlineMenu />,
                          },
                        ]}
                      />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </>
  );
};

export default TableUsersDesktop;
