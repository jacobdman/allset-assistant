import React from "react";
import "../assistantOptions.css";
import dayjs from "dayjs";
import Grow from "@mui/material/Grow";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calendar = ({
  openConfirmationPage,
  selectedServiceDate,
  setSelectedServiceDate,
}) => {
  console.log(selectedServiceDate);
  return (
    <>
      <div className="optionChip">Schedule a Service</div>
      <Grow in timeout={1000}>
        <div>
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
            onChange={value => setSelectedServiceDate(value)}
          />
        </div>
      </Grow>
      <div className="calendarButtonContainer">
        <Grow in timeout={1250}>
          <button
            className="botButton"
            onClick={() => {
              setSelectedServiceDate(prev => prev.hour(12));
              openConfirmationPage();
            }}
          >
            Yes
          </button>
        </Grow>
        <Grow in timeout={1500}>
          <button
            className="botButton"
            onClick={() => {
              setSelectedServiceDate(prev => prev.hour(12));
              openConfirmationPage();
            }}
          >
            12:00 p.m.
          </button>
        </Grow>
        <Grow in timeout={1750}>
          <button
            className="botButton"
            onClick={() => {
              setSelectedServiceDate(prev => prev.hour(16));
              openConfirmationPage();
            }}
          >
            4:00 p.m.
          </button>
        </Grow>
      </div>
    </>
  );
};

export default Calendar;
