import React, { useState } from "react";
import "./assistantOptions.css";
import Typewriter from "typewriter-effect";
import TextField from "@mui/material/TextField";
import Grow from "@mui/material/Grow";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinearProgress from "@mui/material/LinearProgress";
import InputAdornment from "@mui/material/InputAdornment";

const TextOption = ({ setSelectedHelpOption }) => {
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  const optionText = `What number can we use to text you?`;

  return (
    <div className="optionContainer">
      <div className="optionChip">Text us for answers</div>

      {loadingResponse && (
        <Grow in={loadingResponse} timeout={500} transitionDuration={2000}>
          <div className="progress">
            <LinearProgress />
          </div>
        </Grow>
      )}

      <Typewriter
        options={{
          delay: 30,
          cursor: "",
        }}
        onInit={typewriter => {
          typewriter
            .pauseFor(3000)
            .callFunction(() => setLoadingResponse(false))
            .typeString(`<p>${optionText}</p>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      <div className="actionButtonContainer">
        <Grow in={responseGenerationCompleted} timeout={2000}>
          <div className="allsetInput">
            <TextField
              size="small"
              fullWidth
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
            <button onClick={() => setSelectedHelpOption("textPage2")}>
              Send
            </button>
          </div>
        </Grow>
      </div>
    </div>
  );
};

export default TextOption;
