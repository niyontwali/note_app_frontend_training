import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  return (
    <>
      <div className='flex gap-4 justify-center'>
        <Button title="Sign in" buttonBg="bg-red-500" />
        <Button title="Register" />
        <Button title="Logout" disabled />
      </div>

      <div className='mt-12 flex justify-center flex-col'>
        <Input type='email' placeholder="Your Email" />
        <Input type='password' placeholder="Your Password" />
        <Input placeholder="Disabled Input" disabled={true} />
        <Input type='file' placeholder="Upload a file" />
        <Input type='date' placeholder="Pick a date" moreStyle="bg-red-500" />
      </div>
    </>
  );
};

export default App;