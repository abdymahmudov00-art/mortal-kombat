import React from "react";
import Zagolovokk from "../../../widgets/zagolovokk/Zagolovokk";
import Questions from "../../../widgets/questions/Questions";

const Faq = () => {
  return (
    <div id="faq">
      <div className="container">
        <div className="faq">
            <Zagolovokk/>
            <Questions/>
           
        </div>
      </div>
    </div>
  );
};

export default Faq;
