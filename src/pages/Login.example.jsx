import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  // useState - It allows us to track state in a function component
  // syntax
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // handle email changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main className='bg-black h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className="max-w-[300px] bg-[#282626] flex flex-col justify-center items-center py-16 px-12 space-y-3 rounded-2xl shadow-lg shadow-black/30">
        <h1 className='text-2xl font-bold text-white mb-6'>Login Page</h1>
        <Input moreStyle="py-1 text-white focus:ring-1 focus:ring-[#ccc] focus:ring-offset-[1px]" type="text" placeholder="Your Email" value={email} onChange={handleEmailChange} />
        <Input moreStyle="py-1 text-white focus:ring-1 focus:ring-[#ccc] focus:ring-offset-[1px]" type="password" placeholder="Your Password" value={password} onChange={handlePasswordChange} />
        <Button type="submit" title="Sign in" moreStyles="text-white w-full" />
      </form>
    </main>
  );
};

export default Login;