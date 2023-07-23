import React, { useState } from "react";
import "../assistantOptions.css";
import "./estimate.css";
import Grow from "@mui/material/Grow";
import ProjectDetails from "./ProjectDetails";
import ContactDetails from "./ContactDetails";
import ProjectEstimate from "./ProjectEstimate";

const pageOptions = [ProjectDetails, ContactDetails, ProjectEstimate];

const Estimate = ({ setSelectedHelpOption }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    if (currentPageIndex === pageOptions.length - 1) handleRequestAppointment();
    else setCurrentPageIndex(currentPageIndex + 1);
  };

  const handleRequestAppointment = () => {
    setSelectedHelpOption("schedule");
  };

  return (
    <div style={{ width: "100%" }}>
      {pageOptions.map((PageComponent, i) => {
        return currentPageIndex === i ? (
          <Grow
            in={currentPageIndex === i}
            timeout={500}
            transitionDuration={2000}
            style={{ width: "100%" }}
          >
            <div className="optionContainer" style={{ width: "100%" }}>
              <PageComponent nextPage={nextPage} />
            </div>
          </Grow>
        ) : (
          <></>
        );
      })}
    </div>
  );
};

export default Estimate;
