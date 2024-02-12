import React, { useEffect, useState } from "react";
import "./styles.css";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegHourglass } from "react-icons/fa6";
import CouponPopup from "./CouponPopup";

function HomeOne() {
  const [showCouponPoup, setShowCouponPopup] = useState(false);
  const handleShowCoupon = () => {
    setShowCouponPopup(true);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCouponPopup(true);
    }, 15000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="home-bg pos-relative">
      <div className="d-flex justify-content-start px-4">
        <img
          src={process.env.PUBLIC_URL + "./assets/Growthschool.jpg"}
          className="images-container"
        ></img>
      </div>
      <div className="container py-4">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <div className="d-flex flex-column justify-contrent-center w-75 ">
              <h1 className="clr-white text-start my-2">
                Discover a Consultant's Approach To Problem Solving
              </h1>
              <div className="font-12 fw-600 text-start clr-white my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis soluta odit expedita optio qui, deleniti quam!
                Officiis rerum necessitatibus minus nesciunt officia optio
                nulla. Hic cum qui ab molestiae dolorum?
              </div>
              <div className="row my-3">
                <div className="col-3">
                  <div className="border-grey clr-white d-flex flex-column justify-content-center align-items-center py-3">
                    <CiCalendar className="clr-white font-20 fw-600" />
                    <div className="clr-white font-12">3rd March</div>
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                  <div className="border-grey clr-white d-flex flex-column justify-content-center align-items-center py-3">
                    <MdOutlineWatchLater className="clr-white font-20 fw-600" />
                    <div className="clr-white font-12">1pm Onwards</div>
                  </div>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                  <div className="border-grey clr-white d-flex flex-column justify-content-center align-items-center py-3">
                    <FaRegHourglass className="clr-white font-20 fw-600" />
                    <div className="clr-white font-12">2.5 Hrs</div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
              <div
                className=" clr-yellow py-3 fw-600 clr-black font-18 yellow-bg rounded my-3"
                onClick={() => handleShowCoupon()}
              >
                Register Now At 499 1299
              </div>
              <div className="w-100 text-center clr-white font-12 fw-600">
                <u>Click Here To Get Item Discount</u>
              </div>
            </div>
          </div>
          <div className="col-6 pos-relative">
            <div className="border-white p-2 br-20">
              <img
                src={process.env.PUBLIC_URL + "./assets/imageone.jpg"}
                className="h-30vh  w-100"
              ></img>
            </div>
            <div className="d-flex justify-conetnt-center">
              <div className="clr-white font-12 border-white w-25 my-4 ">
                Instructed By
              </div>
            </div>
          </div>
        </div>
      </div>
      <CouponPopup
        showCouponPoup={showCouponPoup}
        setShowCouponPopup={setShowCouponPopup}
      />
    </div>
  );
}

export default HomeOne;
