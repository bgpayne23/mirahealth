// Import the global CSS. If your CSS is in a different file, update the path.
import { FormDataProvider } from '@/components/FormDataContext'
import '../app/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

// This is the custom App component that wraps your pages. 
// Notice how it receives the Component and pageProps from its arguments.
function MyApp({ Component, pageProps }: AppProps) {
  const [formData, setFormData] = useState({
    Age: 0,
    Ethnicity: '',
    Payer: '',
    Location: '',
    Income: '',
    SystolicBP: 0,
    DiastolicBP: 0,
    BS: 0,
    BodyTemp: 0,
    HeartRate: 0,
    obgyn_sentiment: 0,
    obgyn_AvgPatientTime: 0,
    obgyn_NumOfPatients: 0,
    obgyn_QualityRisk: 0,
    obgyn_TotalHours: 0,
    obgyn_BurnoutRisk: 0,
    obgyn_Location: '',
  });

  return (
    <FormDataProvider value={{ formData, setFormData }}>
      <Component {...pageProps} />
    </FormDataProvider>
  );
}

// Don't forget to export the component!
export default MyApp