import { Modal } from "react-bootstrap";
import React from "react";

function CouponPopup({ showCouponPoup, setShowCouponPopup }) {
  const handleCouponClose = () => {
    setShowCouponPopup(false);
  };
  return (
    <Modal
      show={showCouponPoup}
      onHide={handleCouponClose}
      className="signup-popup"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="px-4">
        <div className="d-flex justify-content-center flex-column w-100">
          <h1 className="w-100 text-center">FLAT 50% OFF</h1>
          <div className="clr-black font-14 w-100 text-center">
            Enter your details and win a coupon worth 15% off
          </div>
        </div>
        <div className="d-flex flex-column">
          <input
            type="tel"
            className="white-bg py-2 rounded border-none my-2 px-2"
            placeholder="Enter your phone"
          ></input>
          <input
            type="email"
            className="white-bg py-2 rounded border-none my-2 px-2"
            placeholder="Enter your Email"
          ></input>
          <div className="clr-white rounded bg-orange text-center py-2">
            Show Me coupon
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CouponPopup;
