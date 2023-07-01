import { useState, useRef, useEffect } from "react";
import "./allset.css";
import PopupChat from "./Popup";
import WavingHandIcon from "@mui/icons-material/WavingHandOutlined";
import Typewriter from "typewriter-effect";

const Allset = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const promptRef = useRef(null);
  const popupRef = useRef(null);

  const handleOpenPopup = async () => {
    promptRef.current.className = "buttonContainer slideOut";
    await new Promise(resolve => setTimeout(resolve, 200));
    setIsPopupOpen(true);
    popupRef.current.className = "popupContainer";
    promptRef.current.style.display = "none";
  };

  const handleClosePopup = async () => {
    popupRef.current.className = "popupContainer slideOut";
    await new Promise(resolve => setTimeout(resolve, 500));
    promptRef.current.className = "buttonContainer";
    promptRef.current.style.display = "flex";
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div
        ref={promptRef}
        className="buttonContainer"
        onClick={handleOpenPopup}
      >
        <div className="titleContainer">
          <WavingHandIcon className="mirror" />
          <p className="title">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("Hi! Can We Help?")
                  .pauseFor(7000)
                  .deleteAll()
                  .typeString("Have Any Questions?")
                  .pauseFor(7000)
                  .start();
              }}
            />
          </p>
        </div>
        <p className="subtitle">
          powered by <span className="bold">allset.</span>
        </p>
      </div>
      {isPopupOpen && <PopupChat ref={popupRef} close={handleClosePopup} />}
    </div>
  );
};

export default Allset;
