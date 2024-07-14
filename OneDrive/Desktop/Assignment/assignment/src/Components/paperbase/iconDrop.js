import "../DataTable/dataTable.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';


function IconDropDown(props) {
  return (
    // <div id="myDropdown" className="dropdown-content">
    //   <a href="#">Edit</a>
    //   <a href="#">Update</a>
    //   <a href="#">Delete</a>
    // </div>
    <div class="dropdown">
    <IconButton color="inherit" sx={{ p: 0.5 }} className={"dropbtn"}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
    <div class="dropdown-content">
      <a href="#">Profile</a>
      <a href="#">{`Iterations (${props?.iterations})`}</a>
      <a href="#">Logout</a>
    </div>
  </div>
  );
}

IconDropDown.propTypes = {
    iterations: PropTypes.number,
  };

IconDropDown.defaultProps = {
    iterations: 0,
}
export default IconDropDown;
