import * as React from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import BasicSelect from "./DropDown"
import { Button } from '@mui/material';

export default function FormPropsTextFields() {

    const intialOptions ={
        MultiplierStart : "",
        MultiplierEnd : "",
        Options : ""
    }
    const [value, setValue]= React.useState(intialOptions)

    const handleChange = (event, name) => {
      setValue({...value, [name] : event.target.value});
    };

    function apiCall() {
        console.log(value,"value")
        //api call
        let body = value;
        axios.post("url", body)
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="P Multiplier Start"
          value={value?.MultiplierStart}
          type='float'
          onChange={(e)=>handleChange(e, "MultiplierStart")}
        />
        <TextField
          required
          id="outlined-required"
          label="P Multiplier End"
          value={value?.MultiplierEnd}
          onChange={(e)=>handleChange(e, "MultiplierEnd")}
          type='number'
        />
         <BasicSelect age={value?.Options} handleChange={(e)=>handleChange(e, "Options")}/>
         <Button variant='contained' onClick={apiCall}>Submit</Button>
    </div>
    </Box>
  );
}