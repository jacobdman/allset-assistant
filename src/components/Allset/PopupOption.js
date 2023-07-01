import React, { useState } from "react";
import "./allset.css";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import LinearProgress from "@mui/material/LinearProgress";

const PopupOption = ({ close, optionTitle, optionText, actionText }) => {
    // const [showCursor, setShowCursor] = useState(true);
    const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  return (
    <div className="optionContainer">
      <div onClick={close}>BACK</div>
      <p className="optionHelp">What can I help with?</p>
      <div className="optionTileContainer">
        <div className="optionTitle">{optionTitle}</div>
      </div>

      <Grow in={loadingResponse} timeout={500} transitionDuration={2000}>
        <div className="progress">
          <LinearProgress />
        </div>
      </Grow>

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
            .pauseFor(500)
            .typeString(`<h3>${actionText}</h3>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            // .callFunction(() => setShowCursor(false))
            .start();
        }}
      />
      <div className="actionButtons">
        <Grow in={responseGenerationCompleted} timeout={2000}>
          <button>
            <CheckIcon />
            Yes
          </button>
        </Grow>
        <Grow in={responseGenerationCompleted} timeout={2500}>
          <button>
            <QuestionMarkIcon />
            No
          </button>
        </Grow>
      </div>
    </div>
  );
};

export default PopupOption;
