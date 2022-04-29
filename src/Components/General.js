import React from "react";

function General({ formData, setFormData }) {
  return (
    <div className="general-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
     <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
     <input
        type="text"
        placeholder="Email Address..."
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
     <input
        type="text"
        placeholder="Phone Number..."
        value={formData.number}
        onChange={(e) => {
          setFormData({ ...formData, number: e.target.value });
        }}
      />
    </div>
  );
}

export default General;