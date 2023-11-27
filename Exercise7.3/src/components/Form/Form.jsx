import React from 'react';

const Form = ({ formData, setFormData, goToReview }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    goToReview();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form:</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <select name="age" value={formData.age} onChange={handleChange}>
          <option value="0-15">0-15</option>
          <option value="16-30">16-30</option>
          <option value="31-45">31-45</option>
          <option value="46+">46+</option>
        </select>
      </label>
      <br />
      <label>
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Review Your Form</button>
    </form>
  );
};

export default Form;
