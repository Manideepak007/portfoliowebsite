import React, { useState } from "react";
import Table from "@mui/material/Table";
import { useHistory } from "react-router-dom";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./dataTable.css";
import DropDown from "./dropdown";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import {actions} from "../../Stores/store"


export default function BasicTable() {
  const history = useHistory();
  console.log(history);
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#addItem",
        popover: {
          title: "Click here",
          description: "To add item, please click here",
          position: "top",
        },
      },
      {
        element: "#options",
        popover: {
          title: "Click here",
          description: "To Update, please click below any of the options",
        },
      },
      {
        element: "#run",
        popover: {
          title: "Click here",
          description: "To run the iterations, please click here",
        },
      },
    ],
  });
  const rows = [
    {
      projectName: "Darden Project",
      createdDate: "29/05/2001",
      status: "Active",
    },
    {
      projectName: "Tata Project",
      createdDate: "29/05/2001",
      status: "Active",
    },
    {
      projectName: "Mahindra Project",
      createdDate: "29/05/2001",
      status: "Active",
    },
    {
      projectName: "Tata Project",
      createdDate: "29/05/2002",
      status: "Active",
    },
  ];
  const [response, setResponse] = useState(rows);
  const [search, setSearch] = useState();
  let item = JSON.parse(localStorage.getItem('loginTime'));
  const [open, setOpen] = useState(false);
  const login = useSelector(state => state.login)
  console.log(login)
  const dispatch = useDispatch();
  console.log(login)
  const onChange = (e) => {
    const value = e.target.value;
    value.length === 0 ? setResponse(rows) : setSearch(value);
  };
  const searchFn = () => {
    let res = response.filter((ele) => {
      if (ele.projectName.toLowerCase().includes(search)) {
        return { ...ele };
      }
    });
    res.length > 0 ? setResponse(res) : setResponse(rows);
  };
console.log(open,"open")
  React.useEffect(() => {
    localStorage.setItem('loginTime', item + 1);
    setTimeout(() => {
      if(item<6) driverObj.drive();
    }, 500);
  });
  return (
    <TableContainer component={Paper} className="container">
      <Typography variant="h2" align="center">
        Project DashBoard
      </Typography>
      <Button
        variant="text"
        startIcon={""}
        onClick={() => history.push("/login")}
        color="error"
        align="right"
      >
        log out
      </Button>
      <div className="button">
        <TextField
          id="outlined-basic"
          className="outlined-basic"
          label="Search Project"
          variant="outlined"
          onChange={onChange}
        />
        <Button
          id="btn"
          variant="contained"
          className="button"
          onClick={searchFn}
        >
          Search
        </Button>
      </div>
      <Button
        variant="text"
        startIcon={<AddIcon />}
        className="btn1"
        id="addItem"
      >
        ADD ITEM
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {response?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>
                <Button variant="contained" color="success">
                  {row.status}
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  className="dottedLines"
                  startIcon={<PlayArrowIcon />}
                  id="run"
                  onClick={()=> {
                    history.push({
                      pathname : "/projectDashboard",
                    }
                    )
                    document.location.reload();
                  }
                  }
                >
                  Run
                </Button>
                <DropDown/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
