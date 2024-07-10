import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { InputLabel } from '@mui/material';
import "./dataTable.css";
import { Typography } from "@mui/material";

export default function BasicTable() {
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

  const onChange = (e) => {
    console.log(e.target.value, "value");
    const value = e.target.value;
    value.length === 0 ? setResponse(rows) : setSearch(value);
  };
  const searchFn = () => {
    let res = response.filter((ele) => {
        console.log(ele.projectName.includes(search))
      if (ele.projectName.includes(search)) {
        return { ...ele};
      }
    });
    res.length > 0 ? setResponse(res) : setResponse(rows);
  };
  return (
    <TableContainer component={Paper} className="container">
      <Typography variant="h2">Project DashBoard</Typography>
      <div className="button">
        <TextField
          id="outlined-basic"
          className="outlined-basic"
          label="Search Project"
          variant="outlined"
          onChange={onChange}
        />
        <Button id="btn" variant="contained" className="button" onClick={searchFn}>
          Search
        </Button>
      </div>
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
                <Button  variant="contained" color="success">
          {row.status}
        </Button>
              </TableCell>
              <TableCell align="right" >
                <Button variant="contained" className="dottedLines"><PlayArrowIcon className="arrowIcon"/> Run</Button>
                <MoreVertIcon/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
