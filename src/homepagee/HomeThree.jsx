import React from "react";
import { SlNote } from "react-icons/sl";
import { BsGraphUp } from "react-icons/bs";

function HomeThree() {
  return (
    <div className="white-bg">
      <div className="w-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="w-50 my-1 fw-700 clr-red">But,</h1>
        <h2 className="fw-700 clr-black w-100 my-1">
          Why Should You become a Mindful Marketer?
        </h2>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-4 d-flex justify-content-center align-items-center flex-column">
            <SlNote className="clr-black font-50 my-2" />
            <div className="clr-black font-14 my-2 max-width75">
              Learn to look at the Challenges Through a differnt lens
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center flex-column">
            <SlNote className="clr-black font-50 my-2" />
            <div className="clr-black font-14 my-2 max-width75">
              Learn to look at the Challenges Through a differnt lens
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center flex-column">
            <SlNote className="clr-black font-50 my-2" />
            <div className="clr-black font-14 my-2 max-width75">
              Learn to look at the Challenges Through a differnt lens
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center flex-column">
            <BsGraphUp className="clr-black font-50 my-2" />
            <div className="clr-black font-14 my-2 max-width50">
              Learn to look at the Challenges Through a differnt lens
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center flex-column">
            <BsGraphUp className="clr-black font-50 my-2" />
            <div className="clr-black font-14 my-2 max-width50">
              Learn to look at the Challenges Through a differnt lens
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeThree;
