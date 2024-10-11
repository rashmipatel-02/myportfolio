import React, { useState } from 'react';
import Title from '../layouts/Title';

const Resume = () => {

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
      </div>
      <div className="flex justify-center space-x-4 mt-8">

        <a href='https://drive.google.com/file/d/151aip4otJhrgaBNM2s8WGDQKgMHIsYj8/view?usp=sharing' target='_blank'>
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-md text-xl"
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
