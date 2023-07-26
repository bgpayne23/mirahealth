import React, { useEffect } from 'react';
import { useState } from 'react';
 
import Link from "next/link";
 
import { USStates } from '@/lib/utils';
 
import { FieldError, UseControllerProps, useForm } from "react-hook-form";
 
//obgyn_Location
// obgyn_AvgPatientTime
// obgyn_NumOfPatients
// obgyn_QualityRisk
// obgyn_TotalHours
// obgyn_BurnoutRisk
// Age
// Ethnicity
// Payer
// Location
// Income
// SystolicBP
// DiastolicBP
// BS
// BodyTemp
// HeartRate
// HDP

type FormValues = {
  age: number;
  ethnicity: string
  insurance: string
  city: string
  state: string
  income: string
  systolicBP: number
  diastolicBP: number 
  bloodSugar: string
  bodyTemp: number
  heartrate: number
  hdp: number 
  
} 
// age/ titles bigger
// boxes give outline and shadow
// Logo to the left on side component
// 

const PatientInputs = () => {
  
//onBlur: This will validate the field when it loses focus.
//onChange: This will validate the field whenever its value changes.
//onSubmit: This will validate the field only when the form is submitted.
//onTouched: This will validate the field when it has been touched.
//all: This will validate the field both when its value changes and when it is blurred.

  const {register, handleSubmit, formState: {errors} } = useForm<FormValues>({
    mode: 'onBlur',
  })
  
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState('');
  
//setTimeout
 
  function onSubmit (data: FormValues) {
    
   
         
    }
    return (
        <form className="w-full max-w-lg mt-9"> 
          <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-age">
        Age
      </label>
      <input 
    {...register("age", {
      required: {value: true, message: "This field is required"},
      validate: value => value >= 9 || "Enter a valid age."
    })}
  className={`appearance-none block w-full bg-light-200 text-gray-700 border 
  ${errors.age ? 'border-red-500' : 'border-gray-200'} 
  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg`} 
  id="grid-first-name" 
  type="number" 
  placeholder=""/>
{errors.age && <p className="text-red-500 text-xs italic">{errors.age.message}</p>}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" 
      htmlFor="grid-ethnicity">
        Ethnicity
      </label>
      <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg" 
        id="grid-ethnicity">
        
    <option >American Indian or Alaska Native</option>
    <option >Asian</option>
    <option >Black or African American</option>
    <option >Native Hawaiian or Other Pacific Islander</option>
    <option >White</option>
    <option >Hispanic, Latino, or Spanish Origin (of any race)</option>
    </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" 
      htmlFor="grid-insurance">
        Insurance Type
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus: border-grey-500 shadow-lg" 
      id="grid-insurance" type="text" 
      placeholder=""/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-password">
        income
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-grey-500 shadow-lg" 
      id="grid-income" 
      type="income"
       placeholder=""/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-city">
    City
  </label>
  <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white shadow-lg" 
  id="grid-city" 
  type="text" 
  placeholder="Baton Rouge"/>
</div>

    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-grey-500 shadow-lg" 
        id="grid-state">
        {USStates.map((state, index) => 
    <option key={index} value={state.code}>{state.name}</option>
  )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600" 
      id="grid-zip" 
      type="text" 
      placeholder="90210"/>
    </div>
    
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2" htmlFor="grid-password">
        Systolic BP
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-green-600" 
      id="grid-password" 
      type="number" 
      onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      placeholder=""/>
      <p className="text-gray-600 text-bold text-xs bg-yellow-200 px-1 w-12 italic"></p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2" htmlFor="grid-password">
        Diastolic BP
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 shadow-lg focus:ring-2 focus:ring-green-600" 
      id="grid-password" 
      type="password" 
      placeholder=""/>
      <p className="text-gray-600 text-xs bg-yellow-200 px-1 w-12 italic"></p>
    </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2" htmlFor="grid-password">
        Heart Rate
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 focus:ring-2 focus:ring-green-600 shadow-lg" 
      id="grid-heart-rate" 
      type="number" 
      placeholder=""/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2" htmlFor="grid-password">
        BMI
      </label>
      <input className="appearance-none block w-full bg-light-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 focus:ring-2 focus:ring-green-600 shadow-lg" 
      id="grid-bmi" 
      type="number" 
      placeholder=""/>
      <p className="text-gray-600 text-xs italic"></p>
    </div>
    
    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Data</button>
  </div>
  
</form>

    )
    
            }
export default PatientInputs;