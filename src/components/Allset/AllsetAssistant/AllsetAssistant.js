import React, { useState } from "react";
import "./allsetAssistant.css";
import Collapse from "@mui/material/Collapse";
import AssistantOption from "./AssistantOption";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMarkOutlined";
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
        <Collapse in={selectedHelpOption === "main"} className="mainContainer">
          <p className="titleText">What can I help with?</p>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("availability")}
          >
            <CalendarMonthIcon />
            Book an appointment
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("quote")}
          >
            <ArticleIcon />
            Get a quote
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("contact-agent")}
          >
            <QuestionMarkIcon />
            Ask a Question
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("info")}
          >
            <QuestionAnswerIcon />
            Text me
          </div>
        </Collapse>
        <Collapse in={selectedHelpOption === "availability"}>
          {selectedHelpOption === "availability" && (
            <AssistantOption
              close={handleCloseOption}
              optionTitle="Availability"
              optionText="Looks like our next available spot is the next Monday at 8:00 a.m."
              actionText="Would you like to book a cleaning service?"
            />
          )}
        </Collapse>
        <span>
          powered by <strong>allset</strong>
        </span>
      </div>
    </div>
  );
});

export default PopupChat;
