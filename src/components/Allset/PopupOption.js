import React, { useState } from "react";
import "./allset.css";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Typewriter from "typewriter-effect";

const PopupOption = ({ close, optionTitle, optionText, actionText }) => {
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  return (
    <div className="optionContainer">
      <div onClick={close}>BACK</div>
      <p className="optionHelp">What can I help with?</p>
      <div className="optionTileContainer">
        <div className="optionTitle">{optionTitle}</div>
      </div>

      <Typewriter
        options={{
          autoStart: true,
        }}
        onInit={typewriter => {
          typewriter
            .pauseFor(2000)
            .typeString(`<p>${optionText}</p>`)
            .pauseFor(1000)
            .typeString(`<h3>${actionText}</h3>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      {/* <p>{optionText}</p> */}
      {/* <h3>{actionText}</h3> */}
      {responseGenerationCompleted && (
        <div className="actionButtons">
          <button>
            <CheckIcon />
            Yes
          </button>
          <span className="spacer"></span>
          <button>
            <QuestionMarkIcon />
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default PopupOption;
