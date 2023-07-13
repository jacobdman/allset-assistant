import "./App.css";
import { useLocation } from "react-router-dom";

import Allset from "./components/Allset";
import DefaultApp from "./components/DefaultApp";

const App = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const exampleSiteURL = query.get("url");
  const spoofedURL = `http://localhost:4000/?url=${encodeURI(exampleSiteURL)}`;
  return (
    <div className="App">
      <Allset />
      {exampleSiteURL ? (
        <iframe src={spoofedURL} title="Allset Example"></iframe>
      ) : (
        <DefaultApp />
      )}
    </div>
  );
};

export default App;
