import React from "react";
import "../assistantOptions.css";
import mapArrayToMenuItems from "../../../utils/mapArrayToMenuItems";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import InputAdornment from "@mui/material/InputAdornment";

const ContactDetails = ({ nextPage }) => {
  const services = ["Deep Clean"];

  const serviceOptions = mapArrayToMenuItems(services);

  return (
    <>
      <div className="optionChip">Instant Estimate</div>
      <Grid
        className="estimateContainer"
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5">Almost done!</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="medium"
            fullWidth
            label="Mobile Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
              sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
            }}
            placeholder="+1 (234) 567-8900"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            size="medium"
            fullWidth
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
              sx: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
            }}
            placeholder="address@email.com"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Lastly, what kind of service do you need?</InputLabel>
            <Select label="Lastly, what kind of service do you need?">
              {serviceOptions}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <button className="botButton" onClick={nextPage}>
            Continue
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactDetails;
