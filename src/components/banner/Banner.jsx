import React from 'react';
import Content from './Content';
import Border from './Border';
import Images from './Image';

export default function Banner() {
  return (
    <div className=' relative font-arima flex items-center justify-between w-full p-10 bg-gray-300 bg-opacity-30 h-[100vh] overflow-hidden mb-20 '>
      <Content />
      <Images />
      <Border />
    </div>
  )
}
