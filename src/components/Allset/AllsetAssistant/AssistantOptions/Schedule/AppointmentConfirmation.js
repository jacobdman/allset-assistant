import React, { useState } from "react";
import "../assistantOptions.css";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import CheckIcon from "@mui/icons-material/Check";

const AppointmentConfirmation = ({
  nextPage,
  selectedServiceDate,
  setSelectedServiceDate,
  handleConfirmAppointment,
}) => {
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  const actionText = "Where can we send your confirmation?";

  return (
    <>
      <div className="optionChip">
        {selectedServiceDate.format("MMMM D, h:mm a")}
      </div>

      <Typewriter
        options={{
          delay: 30,
          cursor: "",
        }}
        onInit={typewriter => {
          typewriter
            .pauseFor(500)
            .typeString(`<h3>${actionText}</h3>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      <div className="actionButtonContainer">
        <Grid container spacing={1} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Grow in={responseGenerationCompleted} timeout={500}>
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
            </Grow>
          </Grid>
          <Grid item xs={12}>
            <Grow in={responseGenerationCompleted} timeout={500}>
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
            </Grow>
          </Grid>
          <Grid item xs={10}>
            <Grow in={responseGenerationCompleted} timeout={1750}>
              <button
                className="botButton"
                onClick={handleConfirmAppointment}
              >
                <CheckIcon />
                Confirm
              </button>
            </Grow>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AppointmentConfirmation;
