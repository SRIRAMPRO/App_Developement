import React, { useState } from "react";
import "../../styles/booking-form.css";
import "../../styles/payment-method.css";
import { Form, FormGroup } from "reactstrap";
import masterCard from "../../assets/all-images/card.jpeg";
import upiImage from "../../assets/all-images/upi.jpg";
import netBankingImage from "../../assets/all-images/netbanking.png";
import QRCode from 'qrcode.react';

const BookingAndPaymentForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  // eslint-disable-next-line
  const [amount, setAmount] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    serviceRequired: "",
    email: "",
    phoneNumber: "",
    address: "",
    date: "",
    additionalNotes: "",
  });

  const submitHandler = async () => {
    console.log("Form Data:", formData);
    console.log("Selected Option:", selectedOption);
    console.log("Amount:", amount);

    const bookingData = {
      ...formData,
      paymentMethod: selectedOption,
      amount: amount
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setPaymentCompleted(true);
      } else {
        console.error("Failed to create booking");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
            <input
                type="date"
                name="date"
                placeholder="Date"
                
              />
            </div>
            <div className="modal-input">
              <input type="text" placeholder="CVV" />
            </div>
            <div className="modal-input">
              <input type="number" placeholder="Amount" />
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
              <input type="text" placeholder="IFSC Code" />
            </div>
            <div className="modal-input">
              <input type="text" placeholder="Amount" />
            </div>
            <div className="modal-input">
              <img src={upiImage} alt="UPI Payment" className="payment-option-image" />
            </div>
            <div className="modal-input">
              <QRCode value={`upi://pay?pa=yourupi@upi&pn=YourName&mc=0000&tid=000000000000&cv=1234&mt=000&mam=${amount}&item=Payment`} />
              <p>Scan this QR code to pay via UPI.</p>
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
              <input type="text" placeholder="Amount" />
            </div>
            <div className="modal-input">
              <img src={netBankingImage} alt="Net Banking" className="payment-option-image" />
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

  const handlePayment = () => {
    submitHandler();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const inputStyle = {
    color: "black",
  };

  const placeholderStyle = {
    color: "gray",
  };

  return (
    <div className="booking-and-payment-form">
      <Form onSubmit={(e) => e.preventDefault()}>
        <div className="form-container">
          <div className="booking-info">
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input
                type="text"
                name="serviceRequired"
                placeholder="Service Required"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.vehicle}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
              <input
                type="text"
                name="address"
                placeholder="Address"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.address}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
              <input
                type="date"
                name="date"
                placeholder="Date"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.date}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <textarea
                rows={5}
                name="additionalNotes"
                className="textarea"
                placeholder="Write"
                style={{ ...inputStyle, ...placeholderStyle }}
                value={formData.additionalNotes}
                onChange={handleChange}
              ></textarea>
            </FormGroup>
          </div>

          {!paymentCompleted && (
            <div className="payment-info">
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
                <div className="d-flex align-items-center justify-content-between">
                  <span>UPI Payment</span>
                  <img src={upiImage} alt="UPI Payment" className="payment-option-image" />
                </div>
              </div>
              <div
                className={`payment-option mt-3 ${selectedOption === "netBanking" ? "selected" : ""}`}
                onClick={() => handleOptionClick("netBanking")}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <span>Net Banking</span>
                  <img src={netBankingImage} alt="Net Banking" className="payment-option-image" />
                </div>
              </div>
            </div>
          )}
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
      </Form>

      {paymentCompleted && (
        <div className="payment-completed-message">
          <h2>Payment Completed</h2>
          <div className="booking-confirmation">
            <h3>Your appointment is booked!</h3>
            <p>Thank you for booking with us. See you soon!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingAndPaymentForm;
