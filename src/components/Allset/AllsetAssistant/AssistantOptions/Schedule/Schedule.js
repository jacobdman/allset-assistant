import React, { useState } from "react";
import "../assistantOptions.css";
import "./Schedule.css";
import Grow from "@mui/material/Grow";
import dayjs from "dayjs";
import SoonestAvailability from "./SoonestAvailability";
import Calendar from "./Calendar";
import AppointmentConfirmation from './AppointmentConfirmation';

const pageOptions = [SoonestAvailability, Calendar, AppointmentConfirmation];

const Schedule = ({ setSelectedHelpOption }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedServiceDate, setSelectedServiceDate] = useState(dayjs().add(1, "day").hour(8).minute(0).second(0).millisecond(0));

  const openConfirmationPage = () => {
    setCurrentPageIndex(2);
  };

  const openCalendarPage = () => {
    setCurrentPageIndex(1);
  };

  const handleConfirmAppointment = () => {
    setSelectedHelpOption('textPage2')
  };

  return (
    <div>
      {pageOptions.map((PageComponent, i) => {
        return currentPageIndex === i ? (
          <Grow
            in={currentPageIndex === i}
            timeout={500}
            transitionDuration={2000}
          >
            <div className="optionContainer">
              <PageComponent
                openCalendarPage={openCalendarPage}
                openConfirmationPage={openConfirmationPage}
                selectedServiceDate={selectedServiceDate}
                setSelectedServiceDate={setSelectedServiceDate}
                handleConfirmAppointment={handleConfirmAppointment}
              />
            </div>
          </Grow>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default Schedule;
