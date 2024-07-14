import "./dataTable.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";


function DropDown() {
  return (
    <div class="dropdown">
    <MoreVertIcon id="options" className={"dropbtn"}/>
    <div class="dropdown-content">
      <a href="#">Edit</a>
      <a href="#">Delete</a>
      <a href="#">Update</a>
    </div>
  </div>
  );
}

export default DropDown;
