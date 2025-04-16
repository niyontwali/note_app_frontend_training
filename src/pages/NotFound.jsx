import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  // store navigation into a variable
  const navigate = useNavigate();
  // Any valid JS Code
  const handleBack = () => {
    // go back
    navigate(-1);
  };
  return (
    <div className='bg-black text-white h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-5xl font-extrabold'>404</h1>
      <p className='text-base text-center'>Sorry, the page you are <br />looking for is not found</p>
      <Button title="Go Back" onClick={handleBack} />
    </div>
  );
};

export default NotFound;