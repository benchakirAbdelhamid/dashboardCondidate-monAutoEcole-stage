import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Avatar } from "@material-tailwind/react";
import {
  AiFillAmazonCircle,
  AiOutlineEdit,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiLogoDiscourse } from "react-icons/bi";
import DropDown from "../components/DropDown";
import { BsDot } from "react-icons/bs";

function createData(
  id,
  categorie,
  type,
  date_examen,
  pret_pout_examen,
) {
  return {
    id,
    categorie,
    type,
    date_examen,
    pret_pout_examen,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon className="tbody_table_md" />
            ) : (
              <KeyboardArrowDownIcon className="tbody_table_md" />
            )}
          </IconButton>
        </TableCell>
        <TableCell className="tbody_table_md" component="th" scope="row">
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
         
        </TableCell>
        <TableCell className="tbody_table_md">
          {row.categorie}
        </TableCell>

        <TableCell className="tbody_table_md">
          {/* ==================drop down ... ================== */}

          <div>
            <DropDown
              row={[
                { id: 1, name: "demander de reporter", icon: <AiOutlineEdit /> },
              ]}
            />
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="b" gutterBottom component="div">
                Afficher plus d'information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="title_table_md">Type</TableCell>
                    <TableCell className="title_table_md">Date Examen</TableCell>
                    <TableCell className="title_table_md">Pret Pout Examen</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      className="tbody_table_md"
                      component="th"
                      scope="row"
                    >
                      {row.type}
                    </TableCell>
                    <TableCell className="tbody_table_md">
                      {row.date_examen}
                    </TableCell>
                    <TableCell className="tbody_table_md  ">
                      <span className="text_padg_examen flex"> 
                      <BsDot style={{'fontSize':'20px'}}  />  {row.pret_pout_examen}</span>
                    </TableCell>
                   
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableUsersTelephone = (props) => {
  return (
    <div>
      <TableContainer className="containerTable">
        <Table className="table_md" aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="title_table_md">
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
              </TableCell>
              <TableCell className="title_table_md">Categorie</TableCell>
              <TableCell className="title_table_md"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.infoCondidate.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUsersTelephone;
