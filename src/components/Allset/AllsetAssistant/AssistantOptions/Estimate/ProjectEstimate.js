import React, { useState } from "react";
import "../assistantOptions.css";
import CheckIcon from "@mui/icons-material/Check";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import LinearProgress from "@mui/material/LinearProgress";
import ClearIcon from "@mui/icons-material/Clear";

const ProjectEstimate = ({ openCalendarPage, openConfirmationPage }) => {
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  const optionText = `<h2 class="estimate-price">$480.00</h2>`;
  const additionalOptionText = `<a href="https://tryallset.com" class="estimate-details">What's included?</a>`;
  const actionText = "Do you want to book now?";

  return (
    <>
      <div className="optionChip">Instant Estimate</div>

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
            .pauseFor(4000)
            .callFunction(() => setLoadingResponse(false))
            .typeString(`${optionText}`)
            .pauseFor(500)
            .typeString(`${additionalOptionText}`)
            .pauseFor(500)
            .typeString(`<h3>${actionText}</h3>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      <div
        className="actionButtonContainer"
        style={{ flexDirection: "column" }}
      >
        <Grow in={responseGenerationCompleted} timeout={2000}>
          <button className="botButton" onClick={openConfirmationPage}>
            <CheckIcon />
            Yes! I want to book now.
          </button>
        </Grow>
        <div className="spacer" />
        <Grow in={responseGenerationCompleted} timeout={2500}>
          <button className="botButton" onClick={openCalendarPage}>
            <ClearIcon />
            Not yet
          </button>
        </Grow>
      </div>
    </>
  );
};

export default ProjectEstimate;
