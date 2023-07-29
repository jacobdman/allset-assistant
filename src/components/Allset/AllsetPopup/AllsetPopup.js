import { useState, useRef } from "react";
import "./allsetPopup.css";
import "../allset.css";
import AllsetAssistant from "../AllsetAssistant";
import WavingHandIcon from "@mui/icons-material/WavingHandOutlined";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AllsetLogo from "../AllsetLogo";

const AllsetPopup = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const promptRef = useRef(null);
  const assistantRef = useRef(null);

  const handleOpenAssistant = async () => {
    promptRef.current.className = "popupContainer slideOut";
    await new Promise(resolve => setTimeout(resolve, 200));
    setIsAssistantOpen(true);
    assistantRef.current.className = "assistantContainer";
    promptRef.current.style.display = "none";
  };

  const handleCloseAssistant = async () => {
    assistantRef.current.className = "assistantContainer slideOut";
    await new Promise(resolve => setTimeout(resolve, 300));
    promptRef.current.className = "popupContainer";
    promptRef.current.style.display = "flex";
    setIsAssistantOpen(false);
  };

  return (
    <div className="allset-root">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div
          ref={promptRef}
          className="popupContainer"
          onClick={handleOpenAssistant}
        >
          <div className="popupTitleContainer">
            <WavingHandIcon className="mirror" />
            <p className="popupTitle">Hi! Can We Help?</p>
          </div>
          <div className="powered-by-allset popupSubtitle">
            <span>powered by</span>
            <AllsetLogo sx={{ width: 40, paddingLeft: "3px" }} />
          </div>
        </div>
        {isAssistantOpen && (
          <AllsetAssistant ref={assistantRef} close={handleCloseAssistant} />
        )}
      </LocalizationProvider>
    </div>
  );
};

export default AllsetPopup;
