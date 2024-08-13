import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    vehicleType: 'car',
    vehicleProblem: '',
    journeyDate: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field)) {
      setSuccessMessage('We will meet you quickly😊');
    } else {
      setSuccessMessage('');
      alert('Please fill in all fields');
    }
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="vehicleProblem"
            placeholder="Vehicle Problem"
            required
            value={formData.vehicleProblem}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="journeyDate"
            placeholder="Journey date"
            required
            value={formData.journeyDate}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit">Book</button>
        </FormGroup>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </Form>
  );
};

export default FindCarForm;
