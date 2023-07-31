import RootLayout from '@/app/layout';
import PatientInputs from '../src/components/PatientInputs';
import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
  
<Layout>
<div className="flex flex-col items-center justify-normal h-screen bg-sky-50 p-14">
      {/* Home Page Content */}
      <h1 className="text-3xl font-bold mb-4 text-purple-800">Welcome to MiraHealth</h1>
      <img src="mh.jpg" alt="MiraHealth Logo" className="h-80 mb-4 rounded-md" /> 
      <p className="text-2xl text-purple-700">powered by watsonx</p>
      <Link href="/inputs/Patient">
      <button className="mt-4 bg-purple-800 hover:bg-purple-500 text-white font-bold py-3 px-12 text-2xl rounded">
       Get Started
      </button>
    </Link>

    </div>
  </Layout>

  );
};

export default HomePage;