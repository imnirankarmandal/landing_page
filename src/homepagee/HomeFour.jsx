import React, { useEffect, useState } from "react";

function HomeFour() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <div className="home-bg w-100">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="fw-700 clr-white  my-4">
          Time Is Running Out.
          <br />
          Grab Your Spot fast!
        </h1>
        <div className="d-flex flex-row w-100 d-flex justify-content-center clr-white my-4">
          <div className="d-flex flex-column">
            <h1 className="fw-700"> {hours < 10 ? "0" + hours : hours}:</h1>
            <div className="clr-white font-12">Hours</div>
          </div>
          <div className="d-flex flex-column">
            <h1 className="fw-700">
              {minutes < 10 ? "0" + minutes : minutes}:
            </h1>
            <div className="clr-white font-12">Minutes</div>
          </div>{" "}
          <div className="d-flex flex-column">
            <h1 className="fw-700">
              {" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </h1>
            <div className="clr-white font-12">Seconds</div>
          </div>
        </div>
        <div className="d-flex flex-row w-100 d-flex justify-content-center clr-white my-4">
          <div className="w-40 clr-yellow py-3 fw-600 clr-black font-18 yellow-bg rounded my-3">
            Register Now At 499 1299
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFour;
