
import Layout from '@/components/Layout';
import ProviderInputs from '@/components/ProviderInputs';
 
import React from 'react';

const ProviderInputsPage = () => {
  return (
    <Layout>
    <div className='flex items-center justify-center h-screen bg-sky-50'>
     <ProviderInputs />
    </div>
    </Layout>
  );
};

export default ProviderInputsPage;