import React, { useState } from "react";
import "./allsetAssistant.css";
import Collapse from "@mui/material/Collapse";
import EstimateOption from "./AssistantOptions/Estimate";
import ScheduleOption from "./AssistantOptions/Schedule";
import TextOption from "./AssistantOptions/TextOption";
import TextPage2 from "./AssistantOptions/TextPage2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import ClearIcon from "@mui/icons-material/ClearOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBackOutlined";
import AllsetLogo from "../AllsetLogo";

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
        {selectedHelpOption === "main" && (
          <p className="titleText">What can we help with?</p>
        )}
        <Collapse in={selectedHelpOption === "main"} className="mainContainer">
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("estimate")}
          >
            <ArticleIcon />
            Instant Estimate
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("schedule")}
          >
            <CalendarMonthIcon />
            Instant Book
          </div>
          <div
            className="botButton"
            onClick={() => setSelectedHelpOption("text")}
          >
            <QuestionAnswerIcon />
            Text Me
          </div>
        </Collapse>
        <Collapse in={selectedHelpOption !== "main"}>
          {selectedHelpOption === "estimate" && (
            <EstimateOption setSelectedHelpOption={setSelectedHelpOption} />
          )}
          {selectedHelpOption === "schedule" && (
            <ScheduleOption setSelectedHelpOption={setSelectedHelpOption} />
          )}
          {selectedHelpOption === "text" && (
            <TextOption setSelectedHelpOption={setSelectedHelpOption} />
          )}
          {selectedHelpOption === "textPage2" && (
            <TextPage2
              closeAllset={close}
              setSelectedHelpOption={setSelectedHelpOption}
            />
          )}
        </Collapse>
      </div>
      <div className="powered-by-allset">
        <span>powered by</span>
        <AllsetLogo sx={{ width: 50, paddingLeft: "3px" }} />
      </div>
    </div>
  );
});

export default PopupChat;
