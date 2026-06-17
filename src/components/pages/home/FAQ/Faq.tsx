import React from "react";
import Zagolovokk from "../../../widgets/zagolovokk/Zagolovokk";
import Questions from "../../../widgets/questions/Questions";
import Questions2 from "../../../widgets/questions2/Questions2";
import Questions3 from "../../../widgets/questions3/Questions3";

const Faq = () => {
  return (
    <div id="faq">
      <div className="container">
        <div className="faq">
            <Zagolovokk/>
            <Questions/>
           <Questions2/>
           <Questions3/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
