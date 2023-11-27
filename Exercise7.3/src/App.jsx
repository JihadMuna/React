import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Review from './components/Review/Review'


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '0-15',
    comments: '',
  });
  const [isReview, setIsReview] = useState(false);

  const goToReview = () => {
    setIsReview(true);
  };

  const goBack = () => {
    setIsReview(false);
  };

  return (
    <>
      {isReview ? (
        <Review formData={formData} goBack={goBack} />
      ) : (
        <Form formData={formData} setFormData={setFormData} goToReview={goToReview} />
      )}
    </>
  );
}

export default App;