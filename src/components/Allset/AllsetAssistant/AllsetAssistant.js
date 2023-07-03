import React, { useState } from "react";
import "./allsetAssistant.css";
import Collapse from "@mui/material/Collapse";
import AssistantOption from "./AssistantOption";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPasteOutlined";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgentOutlined";

const PopupChat = React.forwardRef(({ close }, ref) => {
  const [selectedHelpOption, setSelectedHelpOption] = useState("main");

  const handleCloseOption = () => {
    setSelectedHelpOption("main");
  };

  return (
    <div ref={ref} className="assistantContainer">
      <div onClick={close}>Close</div>
      <Collapse in={selectedHelpOption === "main"} className="mainContainer">
        <p className="titleText">What can I help with?</p>
        <div
          className="botButton"
          onClick={() => setSelectedHelpOption("availability")}
        >
          <CalendarMonthIcon />
          Availability
        </div>
        <div
          className="botButton"
          onClick={() => setSelectedHelpOption("appointment")}
        >
          <ContentPasteIcon />
          Make an appointment
        </div>
        <div
          className="botButton"
          onClick={() => setSelectedHelpOption("info")}
        >
          <QuestionAnswerIcon />
          Text me with information
        </div>
        <div
          className="botButton"
          onClick={() => setSelectedHelpOption("quote")}
        >
          <ArticleIcon />
          Get an instant quote
        </div>
        <div
          className="botButton"
          onClick={() => setSelectedHelpOption("contact-agent")}
        >
          <SupportAgentIcon />
          Contact an Agent
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
  );
});

export default PopupChat;
