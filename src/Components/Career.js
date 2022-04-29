import React from "react";

function Education({ formData, setFormData }) {
  return (
    <div className="career-info-container">
      <input
        type="text"
        placeholder="Universtiy/School..."
        value={formData.school}
        onChange={(e) => {
          setFormData({ ...formData, school: e.target.value });
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
        type="text"
        placeholder="Subject Studied..."
        value={formData.subject}
        onChange={(e) => {
          setFormData({ ...formData, subject: e.target.value });
        }}
      />
      <input
        type="digit"
        placeholder="Year Completed..."
        value={formData.year}
        onChange={(e) => {
          setFormData({ ...formData, year: e.target.value });
        }}
      />
      
    </div>
  );
}

export default Education;