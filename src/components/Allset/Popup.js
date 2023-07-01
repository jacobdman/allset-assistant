import React, { useState } from "react";
import "./allset.css";
import Collapse from "@mui/material/Collapse";
import PopupOption from "./PopupOption";
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
    <div ref={ref} className="popupContainer">
      <div onClick={close}>Close</div>
      <Collapse in={selectedHelpOption === "main"} className="popupMain">
        <h4>What can I help with?</h4>
        <button onClick={() => setSelectedHelpOption("availability")}>
          <CalendarMonthIcon />
          Availability
        </button>
        <button onClick={() => setSelectedHelpOption("appointment")}>
          <ContentPasteIcon />
          Make an appointment
        </button>
        <button onClick={() => setSelectedHelpOption("info")}>
          <QuestionAnswerIcon />
          Text me with information
        </button>
        <button onClick={() => setSelectedHelpOption("quote")}>
          <ArticleIcon />
          Get an instant quote
        </button>
        <button onClick={() => setSelectedHelpOption("contact-agent")}>
          <SupportAgentIcon />
          Contact an Agent
        </button>
      </Collapse>
      <Collapse in={selectedHelpOption === "availability"}>
        {selectedHelpOption === "availability" && (
          <div className="popupMain">
            <PopupOption
              close={handleCloseOption}
              optionTitle="Availability"
              optionText="Looks like our next available spot is the next Monday at 8:00 a.m."
              actionText="Would you like to book a cleaning service?"
            />
          </div>
        )}
      </Collapse>
      <span>
        powered by <strong>allset</strong>
      </span>
    </div>
  );
});

export default PopupChat;
