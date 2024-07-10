import logo from './logo.svg';
import { Button, Typography } from '@mui/material';
import BasicTable from "./Components/DataTable/dataTable"
// import Paperbase from "./Components/corrosion/corrosion"
import ColorTabs from "./Components/corrosion/corrosion"
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Button variant='contained'>Hello Wold</Button>
      <Typography variant='h1'>Hello Manideepak</Typography> */}
      <BasicTable/>
      {/* <Paperbase/> */}
      <ColorTabs/>
    </div>
  );
}

export default App;
