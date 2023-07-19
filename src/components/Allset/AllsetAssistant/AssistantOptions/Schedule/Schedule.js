import React, { useState } from "react";
import "../assistantOptions.css";
import "./Schedule.css";
import Grow from "@mui/material/Grow";
import LinearProgress from "@mui/material/LinearProgress";
import SoonestAvailability from "./SoonestAvailability";
import Calendar from "./Calendar";

const pageOptions = [SoonestAvailability, Calendar];

const Schedule = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const nextPage = () => {
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const previousPage = () => {
    setCurrentPageIndex(currentPageIndex - 1);
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
              <PageComponent nextPage={nextPage} previousPage={previousPage} />
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
