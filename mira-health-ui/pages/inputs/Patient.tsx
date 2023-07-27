import Layout from '@/components/Layout'
import PatientInputs from '@/components/PatientInputs'
import React from 'react'

const Patient = () => {
  return (
    <Layout>
    <div className='flex items-center justify-center h-screen bg-sky-50'>
    <PatientInputs/>
   </div>
   </Layout>
  )
}

export default Patient