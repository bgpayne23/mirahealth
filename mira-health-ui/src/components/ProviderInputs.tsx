import React, { useEffect } from 'react';
import { useState } from 'react';

import Link from "next/link";

import { USStates } from '@/lib/utils';

import { FieldError, UseControllerProps, useForm } from "react-hook-form";

 

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



    }
    return (
        <form className="w-full max-w-lg mt-20">
            <div className="flex flex-wrap -mx-3 mb-6">

                {/* Facility Location */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-facility-location">
                        Facility Location
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-facility-location">

                        <option >Metropolitan</option>
                        <option >Micropolitan</option>
                        <option >Rural</option>
                    </select>
                </div>

                {/* Coverage Accepted */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-coverage-accepted">
                        Coverage Accepted
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-coverage-accepted">

                        <option >Public Insurance</option>
                        <option >Private Insurance</option>
                        <option >No Coverage</option>
                    </select>
                </div>

                {/* Response Size */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-response-size">
                        Response Size
                    </label>
                    <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600"
                        id="grid-response-size"
                        type="number"
                        placeholder="number" />
                </div>

                {/* Availability */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-availability">
                        Availability
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-availability">

                        <option >Day: 7am-7pm</option>
                        <option >Night: 7pm-7am</option>
                        <option >Emergency: On-Call</option>
                        <option >After Hours</option>
                    </select>
                </div>

                {/* Staff Size */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-staff-size">
                        Staff Size
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-staff-size">

                        <option >0-10 doctors</option>
                        <option >11-50 doctors</option>
                        <option >More than 50 doctors</option>
                    </select>
                </div>

                {/* Response Sentiment */}
                {/* TO DO : add colors */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-response-sentiment">
                        Response Sentiment
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-response-sentiment">

                        <option className="text-green-500 bg-light-green-200" value="happy">Happy</option>
                        <option className="text-yellow-500" value="okay">Okay</option>
                        <option className="text-red-500" value="not-well">Not well</option>
                    </select>
                </div>

                {/* Hours Worked */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-hours-worked">
                        Hours Worked
                    </label>
                    <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600"
                        id="grid-hours-worked"
                        type="number"
                        placeholder="number" />
                </div>

                {/* Response Time */}
                {/* TO DO : I don't think I did this one correctly */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-response-time">
                        Response Time
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-response-time">

                        <option >24-48 hours M-F</option>
                        <option >48-72 hours Sat-Sun</option>
                    </select>
                </div>

                {/* Patient Notes Size */}
                {/* TO DO : max 5000 characters */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-patient-notes-size">
                        Patient Notes Size
                    </label>
                    <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600"
                        id="grid-patient-notes-size"
                        type="number"
                        placeholder="number" />
                </div>

                {/* Doctor Patient Ratio */}
                {/* Doctor/Patient Rato = Range (0 to 100) for private (clinic or hospital care), 
                (101-1000) for public (clinic or hospital care)facilitty. */}
                {/* TO DO : I don't think I did this one correctly */}
                <div className="w-full md:w-1/2 px-3  mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-doctor-patient-ratio">
                        Doctor Patient Ratio
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-doctor-patient-ratio">

                        <option >0-100</option>
                        <option >101-1000</option>
                    </select>
                </div>

                {/* Response Frequency */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-response-frequency">
                        Response Frequency
                    </label>
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-lg"
                        id="grid-response-frequency">

                        <option >1 visit/3 months</option>
                        <option >1 visit/6 months</option>
                        <option >1 visit/year</option>
                        <option >Other</option>
                    </select>
                </div>

                {/* Patient Notes Sentiment */}
                {/* TO DO? : max 5000 characters */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-patient-notes-sentiment">
                        Patient Notes Sentiment
                    </label>
                    <input className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600"
                        id="grid-patient-notes-sentiment"
                        type="text"
                        placeholder=" " />
                </div>

                <button type="submit" className="my-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Data</button>

            </div>

        </form>

    )

}
export default ProviderInputs;