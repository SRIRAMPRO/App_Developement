import React, { useState } from "react";
import masterCard from "../../assets/all-images/master-card.jpg";
import upiQRCode from "../../assets/all-images/qr.png";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [amount, setAmount] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    openModal(option);
  };

  const openModal = (option) => {
    let content;
    switch (option) {
      case "card":
        content = (
          <>
            <h2>Enter Card Details</h2>
            <div className="modal-input">
              <input type="text" placeholder="Card Number" />
            </div>
            <div className="modal-input">
              <input type="text" placeholder="Expiry Date (MM/YY)" />
            </div>
            <div className="modal-input">
              <input type="text" placeholder="CVV" />
            </div>
            <div className="modal-input">
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </>
        );
        break;
      case "upi":
        content = (
          <>
            <h2>UPI Payment</h2>
            <div className="modal-input">
              <input type="text" placeholder="UPI ID" />
            </div>
            <div className="modal-input">
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="modal-input">
              <img src={upiQRCode} alt="UPI QR Code" className="upi-qr-code" />
            </div>
          </>
        );
        break;
      case "netBanking":
        content = (
          <>
            <h2>Net Banking</h2>
            <div className="modal-input">
              <input type="text" placeholder="Bank Account Number" />
            </div>
            <div className="modal-input">
              <input type="text" placeholder="IFSC Code" />
            </div>
            <div className="modal-input">
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </>
        );
        break;
      default:
        content = null;
    }
    setModalContent(content);
    setShowModal(true);
  };

  const handleReserveNow = () => {
    if (selectedOption) {
      openModal(selectedOption);
    }
  };

  const handlePayment = () => {
    setShowModal(false);
    setPaymentCompleted(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="payment-method-container">
      {!paymentCompleted ? (
        <>
          <div
            className={`payment-option ${selectedOption === "card" ? "selected" : ""}`}
            onClick={() => handleOptionClick("card")}
          >
            <div className="d-flex align-items-center justify-content-between">
              <span>Master Card</span>
              <img src={masterCard} alt="Master Card" className="payment-card-image" />
            </div>
          </div>

          <div
            className={`payment-option mt-3 ${selectedOption === "upi" ? "selected" : ""}`}
            onClick={() => handleOptionClick("upi")}
          >
            UPI Payment
          </div>

          <div
            className={`payment-option mt-3 ${selectedOption === "netBanking" ? "selected" : ""}`}
            onClick={() => handleOptionClick("netBanking")}
          >
            Net Banking
          </div>

          <div className="payment-button-container mt-5">
            <button className="payment-button" onClick={handleReserveNow}>
              Reserve Now
            </button>
          </div>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-container">
                {modalContent}
                <div className="modal-actions">
                  <button className="modal-button cancel" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="modal-button" onClick={handlePayment}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="payment-completed-message">
          <h2>Payment Completed</h2>
          <p>Your payment of Rs.{amount} was successful.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
