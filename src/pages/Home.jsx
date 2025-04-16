import React from 'react';
import { heroLogo, watch } from '../assets';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className='relative h-[70vh]'>
      <div className='z-50 flex flex-col items-center space-y-5 pt-14'>
        <img src={heroLogo} alt="Hero Image" className='w-[150px] h-auto' />
        <h1 className='text-lg'>Thintant Classic</h1>
        <div className='flex justify-center items-center gap-6'>
          <Button title="Learn more" moreStyles="text-white" />
          <Button title="Buy" moreStyles="border border-[#0071e3] bg-transparent text-[#0071e3] hover-bg-[#0071e3] hover:text-white" />
        </div>
      </div>
      <img src={watch} alt="Watch" className='-z-1 absolute bottom-0 h-[70vh] object-cover' />
    </div>
  );
};

export default Home;