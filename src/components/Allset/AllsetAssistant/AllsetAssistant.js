import React, { useState } from "react";
import "./allsetAssistant.css";
import Collapse from "@mui/material/Collapse";
import ScheduleOption from "./AssistantOptions/Schedule";
import TextOption from "./AssistantOptions/TextOption";
import TextPage2 from "./AssistantOptions/TextPage2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import ClearIcon from "@mui/icons-material/ClearOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";

const PopupChat = React.forwardRef(({ close }, ref) => {
  const [selectedHelpOption, setSelectedHelpOption] = useState("main");

  const handleCloseOption = () => {
    setSelectedHelpOption("main");
  };

  return (
    <div ref={ref} className="assistantContainer">
      <div className="navButtons">
        <div className="navButton" onClick={handleCloseOption}>
          {selectedHelpOption !== "main" && (
            <>
              <ArrowBackIcon /> Back
            </>
          )}
        </div>
        <div className="navButton" onClick={close}>
          Close
          <ClearIcon />
        </div>
      </div>
      <div className="assistantContent">
        <p className="titleText">What can I help with?</p>
        <Collapse in={selectedHelpOption === "main"} className="mainContainer">
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("estimate")}
          >
            <ArticleIcon />
            Get Instant Estimate
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("schedule")}
          >
            <CalendarMonthIcon />
            Schedule a Service
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("text")}
          >
            <QuestionAnswerIcon />
            Text us
          </div>
        </Collapse>
        <Collapse in={selectedHelpOption !== "main"}>
          {selectedHelpOption === "schedule" && <ScheduleOption setSelectedHelpOption={setSelectedHelpOption} />}
          {selectedHelpOption === "text" && <TextOption setSelectedHelpOption={setSelectedHelpOption} />}
          {selectedHelpOption === "textPage2" && <TextPage2 closeAllset={close} setSelectedHelpOption={setSelectedHelpOption} />}
        </Collapse>
        <span>
          powered by <strong>allset</strong>
        </span>
      </div>
    </div>
  );
});

export default PopupChat;
