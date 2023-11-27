import React from 'react';

const Review = ({ formData, goBack }) => {
  return (
    <div>
      <h2>Review Your Form:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      <p>Comments: {formData.comments}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default Review;
