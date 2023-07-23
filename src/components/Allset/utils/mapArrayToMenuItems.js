import MenuItem from "@mui/material/MenuItem";

const mapArrayToMenuItems = array =>
  array.map(item => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

export default mapArrayToMenuItems;
