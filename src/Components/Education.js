import React from "react";

function Education({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="University/School..."
        value={formData.school}
        onChange={(e) => {
          setFormData({ ...formData, school: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Subject Studied..."
        value={formData.subject}
        onChange={(e) => {
          setFormData({ ...formData, subject: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Degree Earned..."
        value={formData.degree}
        onChange={(e) => {
          setFormData({ ...formData, degree: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="Year Completed..."
        value={formData.yearCompleted}
        min={1900}
        max={2022}
        onChange={(e) => {
          setFormData({ ...formData, yearCompleted: e.target.value });
        }}
      />
    </div>
  );
}

export default Education