import React from "react";
import { Timeline } from "antd";
export default function Time() {
  return (
    <section className='container mx-auto px-5 md:px-16'>
      <div className='flex justify-center align-middle'>
        <div className='w-1/2 pr-20'>
          <span className='service-name text-center '>Perperation</span>
          <h2 className='title text-center pb-10'>METHODOLOGY</h2>
        </div>
        <div className='w-1/2' data-aos='fade-up'>
          <Timeline
            items={[
              {
                children: " Step 1 : Chapter Wise Tests",
              },
              {
                children: " Step 2 : Unit Wise Tests",
              },
              {
                children: " Step 3 : Unit Wise Revisions",
              },
              {
                children: " Step 4 : Final Tests",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
