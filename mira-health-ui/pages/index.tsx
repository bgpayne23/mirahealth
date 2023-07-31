import RootLayout from '@/app/layout';
import PatientInputs from '../src/components/PatientInputs';
import Link from 'next/link';
import React from 'react';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
  
<Layout>
<div className="flex flex-col items-center justify-center h-screen bg-sky-50">
      {/* Home Page Content */}
      <h1 className="text-3xl font-bold mb-4">Welcome to MiraHealth</h1>
      <p className="text-xl">This is the home page for the MiraHealth app.</p>
      <Link href="/inputs/Patient">
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
       Get Started
      </button>
    </Link>

    </div>
  </Layout>

  );
};

export default HomePage;