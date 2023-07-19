import React, { useState } from "react";
import "./assistantOptions.css";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import LinearProgress from "@mui/material/LinearProgress";

const TextOption = ({ setSelectedHelpOption, closeAllset }) => {
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseSet1Completed, setResponseSet1Completed] = useState(false);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  const optionText = `Message sent!`;

  return (
    <div className="optionContainer">
      <div className="optionChip">Text us for answers</div>

      <Grow in={loadingResponse} timeout={500} transitionDuration={2000}>
        <div className="progress">
          <LinearProgress />
        </div>
      </Grow>
      <Grow in={responseSet1Completed} timeout={500}>
        <MarkChatReadOutlinedIcon fontSize="large" />
      </Grow>

      <Typewriter
        options={{
          delay: 30,
          cursor: "",
        }}
        onInit={typewriter => {
          typewriter
            .pauseFor(5000)
            .callFunction(() => setLoadingResponse(false))
            .callFunction(() => setResponseSet1Completed(true))
            .typeString(`<p>${optionText}</p>`)
            .pauseFor(2500)
            .typeString(`<p class="altTitle">Can I help anywhere else?</p>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      <div className="actionButtonContainer">
        <Grow in={responseGenerationCompleted} timeout={2000}>
          <button className="botButton" onClick={() => setSelectedHelpOption('main')}>
            <CheckIcon />
            Yes
          </button>
        </Grow>
        <div className="spacer" />
        <Grow in={responseGenerationCompleted} timeout={2500}>
          <button className="botButton" onClick={closeAllset}>
            <ClearIcon />
            I'm done
          </button>
        </Grow>
      </div>
    </div>
  );
};

export default TextOption;
