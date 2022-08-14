import React from 'react';

export default function CurrentDate() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className='flex items-end justify-end'>
      <h1>{date}</h1>
    </div>
  );
}
