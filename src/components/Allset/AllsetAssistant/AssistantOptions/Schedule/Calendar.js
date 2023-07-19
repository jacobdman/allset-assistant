import React, { useState } from "react";
import "../assistantOptions.css";
import dayjs from "dayjs";
import CheckIcon from "@mui/icons-material/Check";
import Typewriter from "typewriter-effect";
import Grow from "@mui/material/Grow";
import LinearProgress from "@mui/material/LinearProgress";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const SoonestAvailability = () => {
  return (
    <>
      <div className="optionChip">Schedule a Service</div>
      <StaticDatePicker
        className="calendar"
        disablePast
        defaultValue={dayjs().add(1, "day")}
        slotProps={{
          actionBar: { actions: [] },
          toolbar: {
            hidden: true,
          },
        }}
      />
      <div className="calendarButtonContainer">
        <Grow in timeout={2000}>
          <button className="botButton">Yes</button>
        </Grow>
        <Grow in timeout={2500}>
          <button className="botButton">12:00 p.m.</button>
        </Grow>
        <Grow in timeout={2500}>
          <button className="botButton">4:00 p.m.</button>
        </Grow>
      </div>
    </>
  );
};

export default SoonestAvailability;
