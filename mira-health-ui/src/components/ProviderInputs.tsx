import React, { useEffect } from 'react';
import { useState } from 'react';

import Link from "next/link";

import { USStates } from '@/lib/utils';

import { FieldError, UseControllerProps, useForm, Controller } from "react-hook-form";
import axios from 'axios';

 

type FormValues = {

    facilityLocation: string
    coverageAccepted: string
    responseSize: number
    availability: string
    staffSize: number
    responseSentiment: string
    hoursWorked: number
    responseTime: number
    patientNotesSize: number
    doctorPatientRatio: number
    responseFrequency: number
    patientNotesSentiment: string

    obgyn_AvgPatientTime: number;
    obgyn_NumOfPatients: number;
    obgyn_QualityRisk: number;
    obgyn_TotalHours: number;
    obgyn_BurnoutRisk: number;
    obgyn_Location: string;
    Age: number;
    Ethnicity: string;
    Payer: string;
    Location: string;
    Income: string;
    SystolicBP: number;
    DiastolicBP: number;
    BS: number;
    BodyTemp: number;
    HeartRate: number;
    HDP: number;

}
// age/ titles bigger
// boxes give outline and shadow
// Logo to the left on side component
// 

const ProviderInputs = () => {

    //onBlur: This will validate the field when it loses focus.
    //onChange: This will validate the field whenever its value changes.
    //onSubmit: This will validate the field only when the form is submitted.
    //onTouched: This will validate the field when it has been touched.
    //all: This will validate the field both when its value changes and when it is blurred.

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        mode: 'onBlur',
    })
    

    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState('');

    //setTimeout

    function onSubmit(data: FormValues) {
    // todo: connect this to another component or datasource. hardcode for now.
    data.obgyn_AvgPatientTime = 21;
    data.obgyn_BurnoutRisk = 0;
    data.obgyn_NumOfPatients = 16;
    data.obgyn_QualityRisk = 0;
    data.obgyn_TotalHours = 336;
    data.obgyn_Location = data.obgyn_Location;
    data.Age = 18;
    data.SystolicBP = 120;
    data.DiastolicBP = 80;
    data.BS = 6;
    data.BodyTemp = 99;
    data.HeartRate = 65;

    console.log(data);
    // todo: transfer data from response to predictions page 
    axios.post('http://34.229.92.101/', data).then(function (response) {
      console.log(response);
    })
      .catch(function error() {
        console.log(error);
      });

    }
    
    return (
        <form className="w-full max-w-lg mt-20">
            <div className="flex flex-wrap -mx-3 mb-6">

                {/* Facility Location */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-facility-location">
                        Facility Location
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        {...register("obgyn_Location", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        id="grid-facility-location">
                        <option value="">Select an option...</option>
                        <option value="Metropolitan">Metropolitan</option>
                        <option value="Micropolitan">Micropolitan</option>
                        <option value="Rural">Rural</option>
                    </select>
                    {errors.obgyn_Location && <p className="text-red-500 text-xs italic">{errors.obgyn_Location.message}</p>}
                </div>

                {/* Coverage Accepted */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-coverage-accepted">
                        Coverage Accepted
                    </label>
                    <select 
                        {...register("coverageAccepted", {
                            required: { value: true, message: "This field is required" }
                
                            })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-coverage-accepted">
                        <option value="">Select an option...</option>
                        <option >Public Insurance</option>
                        <option >Private Insurance</option>
                        <option >No Coverage</option>
                    </select>
                    {errors.coverageAccepted && <p className="text-red-500 text-xs italic">{errors.coverageAccepted.message}</p>}
                </div>

                {/* Response Size */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-response-size">
                        Response Size
                    </label>
                    <input 
                    {...register("responseSize", {
                        required: { value: true, message: "This field is required" },
                        validate: value => value >= 9 || "Enter a valid age."
                        })}
                    className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                        id="grid-response-size"
                        type="number"
                        placeholder="number" />
                {errors.responseSize && <p className="text-red-500 text-xs italic">{errors.responseSize.message}</p>}
                </div>

                {/* Availability */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-availability">
                        Availability
                    </label>
                    <select 
                        {...register("availability", {
                            required: { value: true, message: "This field is required" }
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-availability">
                        <option value="">Select an option...</option>
                        <option >Day: 7am-7pm</option>
                        <option >Night: 7pm-7am</option>
                        <option >Emergency: On-Call</option>
                        <option >After Hours</option>
                    </select>
                    {errors.availability && <p className="text-red-500 text-xs italic">{errors.availability.message}</p>}
                </div>

                {/* Staff Size */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-staff-size">
                        Staff Size
                    </label>
                    <select 
                        {...register("staffSize", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-staff-size">
                        <option value="">Select an option...</option>
                        <option >0-10 doctors</option>
                        <option >11-50 doctors</option>
                        <option >More than 50 doctors</option>
                    </select>
                    {errors.staffSize && <p className="text-red-500 text-xs italic">{errors.staffSize.message}</p>}
                </div>

                {/* Response Sentiment */}
                {/* TO DO : add colors */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-response-sentiment">
                        Response Sentiment
                    </label>
                    <select 
                        {...register("responseSentiment", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-response-sentiment">
                        <option value="">Select an option...</option>
                        <option className="text-green-500 bg-light-green-200" value="happy">Happy</option>
                        <option className="text-yellow-500" value="okay">Okay</option>
                        <option className="text-red-500" value="not-well">Not well</option>
                    </select>
                    {errors.responseSentiment && <p className="text-red-500 text-xs italic">{errors.responseSentiment.message}</p>}
                </div>

                {/* Hours Worked */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-hours-worked">
                        Hours Worked
                    </label>
                    <input 
                        {...register("hoursWorked", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                        id="grid-hours-worked"
                        type="number"
                        placeholder="number" />
                    {errors.hoursWorked && <p className="text-red-500 text-xs italic">{errors.hoursWorked.message}</p>}
                </div>

                {/* Response Time */}
                {/* TO DO : I don't think I did this one correctly */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-response-time">
                        Response Time
                    </label>
                    <select 
                        {...register("responseTime", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-response-time">
                        <option value="">Select an option...</option>
                        <option >24-48 hours M-F</option>
                        <option >48-72 hours Sat-Sun</option>
                    </select>
                    {errors.responseTime && <p className="text-red-500 text-xs italic">{errors.responseTime.message}</p>}
                </div>

                {/* Patient Notes Size */}
                {/* TO DO : max 5000 characters */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-patient-notes-size">
                        Patient Notes Size
                    </label>
                    <input 
                        {...register("patientNotesSize", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                        id="grid-patient-notes-size"
                        type="number"
                        placeholder="number" />
                    {errors.patientNotesSize && <p className="text-red-500 text-xs italic">{errors.patientNotesSize.message}</p>}
                </div>

                {/* Doctor Patient Ratio */}
                {/* Doctor/Patient Rato = Range (0 to 100) for private (clinic or hospital care), 
                (101-1000) for public (clinic or hospital care)facilitty. */}
                {/* TO DO : I don't think I did this one correctly */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-doctor-patient-ratio">
                        Doctor Patient Ratio
                    </label>
                    <select 
                        {...register("doctorPatientRatio", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-doctor-patient-ratio">
                        <option value="">Select an option...</option>
                        <option >0-100</option>
                        <option >101-1000</option>
                    </select>
                    {errors.doctorPatientRatio && <p className="text-red-500 text-xs italic">{errors.doctorPatientRatio.message}</p>}
                </div>

                {/* Response Frequency */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-response-frequency">
                        Response Frequency
                    </label>
                    <select 
                        {...register("responseFrequency", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                        id="grid-response-frequency">
                        <option value="">Select an option...</option>
                        <option >1 visit/3 months</option>
                        <option >1 visit/6 months</option>
                        <option >1 visit/year</option>
                        <option >Other</option>
                    </select>
                    {errors.responseFrequency && <p className="text-red-500 text-xs italic">{errors.responseFrequency.message}</p>}
                </div>

                {/* Patient Notes Sentiment */}
                {/* TO DO? : max 5000 characters */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-patient-notes-sentiment">
                        Patient Notes Sentiment
                    </label>
                    <input 
                        {...register("patientNotesSentiment", {
                            required: { value: true, message: "This field is required" }
              
                          })}
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                        id="grid-patient-notes-sentiment"
                        type="text"
                        placeholder=" " />
                    {errors.patientNotesSentiment && <p className="text-red-500 text-xs italic">{errors.patientNotesSentiment.message}</p>}
                </div>

                <button type="submit" className="my-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Data</button>

            </div>

        </form>

    )

}
export default ProviderInputs;