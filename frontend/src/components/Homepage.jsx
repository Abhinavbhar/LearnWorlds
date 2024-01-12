import React from 'react';
import Video from '../../public/first.prio.mp4';
import Video2 from '../../public/second.mp4';

function Homepage() {
  return (
    <>
      <div className=' h-full w-full'>
        <div className='flex flex-row '>
          <div className='w-[30%] h-[40] ml-[20%] mr-8 mt-40'>
            <h1 className='text-4xl font-bold'> Create and sell online courses from your own website </h1>
            <p className='text-lg mr-12 mt-12'>
              The best online course platform for creating, selling and promoting your online courses. Start monetizing your skills, experience, and your audience
            </p>
            <div className="mt-12">
              <button className="px-8 py-4 text-white bg-[#02cfc0] rounded-lg text-lg font-bold mr-4">
                Get started for free
              </button>
              <button className="px-8 py-4 text-black bg-white rounded-lg text-lg border border-black hover:bg-gray-200">
                Watch a demo
              </button>
            </div>
          </div>
          <div className='relative h-[45%] w-[30%] overflow-hidden'>
            <div className="w-full h-[15%] absolute top-0 bg-gradient-to-t from-transparent to-white"></div>
            <div className="w-full h-[15%] absolute bottom-0 bg-gradient-to-b from-transparent to-white"></div>
            <video className="w-full h-full object-cover" loop muted autoPlay>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className='flex flex-col mt-40 ml-80 mr-80'>
          <h2 className='text-4xl font-bold text-center mb-20'>Craft learning experience your customers will love </h2>
          <div className='flex flex-row '>
          <div className=" p-8 rounded-lg w-[55%]">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Engaging and Effective Training</h2>
        <p className="text-gray-700 text-lg">
          Engage learners with interactive videos, ebooks, 1:1 & group sessions, assessments,
          certificates, SCORMs, surveys, and much more.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">The Most Versatile Course Experience</h2>
        <p className="text-gray-700 text-lg">
          Beautiful themes for your course player and flexibility for free, paid, private,
          drip-fed or curated course pathways.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Re-imagined Interactive Video Learning</h2>
        <p className="text-gray-700 text-lg">
          Effortlessly convert your videos into exceptional experiences with automatically
          extracted transcripts, quizzes, and tables of contents.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Get Social Media Talking</h2>
        <p className="text-gray-700 text-lg">
          Nurture your community and create lasting relationships with a social-first training school.
        </p>
      </div>
    </div>
            <div className='relative h-[45%] w-[50%]'>
              <video className="w-full h-full object-cover" loop muted autoPlay>
                <source src={Video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
