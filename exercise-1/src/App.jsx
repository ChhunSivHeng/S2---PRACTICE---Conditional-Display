import React from "react";
import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Scores from "./components/Scores";
import { JAVA_RESULTS, HTML_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS } from "./data";

  function App() {
    return (
      <>
        <Header batchName="PNC batch 2024" logo={pnLogo} />
        <main className="scores-container">
          <Scores courseName="Java" courseResults={JAVA_RESULTS} />
          <Scores courseName="HTML" courseResults={HTML_RESULTS} />
          <Scores courseName="Python" courseResults={PYTHON_RESULTS} />
          <Scores courseName="English" courseResults={ENGLISH_RESULTS} />
        </main>
      </>
    );
    
  
}

export default App;
