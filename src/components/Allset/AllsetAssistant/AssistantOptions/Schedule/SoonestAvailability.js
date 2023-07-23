import React, { useState } from "react";
import "../assistantOptions.css";
import CheckIcon from "@mui/icons-material/Check";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import LinearProgress from "@mui/material/LinearProgress";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";

const SoonestAvailability = ({ openCalendarPage, openConfirmationPage }) => {
  const [loadingResponse, setLoadingResponse] = useState(true);
  const [responseGenerationCompleted, setResponseGenerationCompleted] =
    useState(false);

  const optionText = `Looks like our next available spot is the next <strong>Monday at 8:00 a.m.<strong>`;
  const actionText = "Would you like to book a cleaning service?";

  return (
    <>
      <div className="optionChip">Schedule a Service</div>

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
            .pauseFor(500)
            .typeString(`<h3>${actionText}</h3>`)
            .callFunction(() => setResponseGenerationCompleted(true))
            .start();
        }}
      />
      <div className="actionButtonContainer">
        <Grow in={responseGenerationCompleted} timeout={2000}>
          <button className="botButton" onClick={openConfirmationPage}>
            <CheckIcon />
            Yes
          </button>
        </Grow>
        <div className="spacer" />
        <Grow in={responseGenerationCompleted} timeout={2500}>
          <button className="botButton" onClick={openCalendarPage}>
            <CalendarMonthIcon />
            More
          </button>
        </Grow>
      </div>
    </>
  );
};

export default SoonestAvailability;
