import React from 'react';

const Card = ({ title, content, createdAt }) => {
  return (
    <div className='text-white bg-gray-700 py-4 px-6 rounded-lg '>
      <h3 className='text-xl mb-2'>{title}</h3>
      <p className='text-gray-300'>{content}</p>
      <small className='text-sm text-gray-300 flex justify-end'>
        <span>{createdAt}</span>
      </small>
    </div>
  );
};

export default Card;