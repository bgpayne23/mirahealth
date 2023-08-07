import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import { USStates } from '@/lib/utils';
import { FieldError, UseControllerProps, useForm, Controller } from "react-hook-form";
import axios from 'axios';
import FormDataContext from './FormDataContext';

type FormValues = {


    obgyn_AvgPatientTime: number;
    obgyn_NumOfPatients: number;
    obgyn_QualityRisk: number;
    obgyn_TotalHours: number;
    obgyn_BurnoutRisk: number;
    obgyn_Location: string;
    //obgyn_sentiment: number;


}
// age/ titles bigger
// boxes give outline and shadow
// Logo to the left on side component
// 

const ProviderInputs2 = () => {



    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        mode: 'onBlur',
    })
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState('');
    const { formData, setFormData } = useContext(FormDataContext);



    function onSubmit(data: FormValues) {
        // todo: connect this to another component or datasource. hardcode for now.
        data.obgyn_AvgPatientTime = parseInt(data.obgyn_AvgPatientTime as any);
        data.obgyn_BurnoutRisk = parseInt(data.obgyn_BurnoutRisk as any);
        data.obgyn_NumOfPatients = parseInt(data.obgyn_NumOfPatients as any);
        data.obgyn_QualityRisk = parseInt(data.obgyn_QualityRisk as any);
        data.obgyn_TotalHours = parseInt(data.obgyn_TotalHours as any);
        data.obgyn_Location = data.obgyn_Location;
        //data.obgyn_sentiment = parseInt(data.obgyn_sentiment as any);


        console.log(data);

        setFormData(currentData => ({ ...currentData, ...data }));
        router.push('/inputs/Notes')


    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
                <div className="text-3xl mb-8 font-bold text-purple-700">Provider Input</div>
                <div className="flex flex-wrap -mx-3 mb-6">

                    {/* obgyn_Location */}
                    <div className="w-full md:w-1/2 px-3 mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-location">
                            Facility Location
                        </label>
                        <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-lg"
                            {...register("obgyn_Location", {
                                required: { value: true, message: "This field is required" }

                            })}
                            id="grid-obgyn-location">
                            <option value="">Select an option...</option>
                            <option value="Metropolitan">Metropolitan</option>
                            <option value="Micropolitan">Micropolitan</option>
                            <option value="Rural">Rural</option>
                        </select>
                        {errors.obgyn_Location && <p className="text-red-500 text-xs italic">{errors.obgyn_Location.message}</p>}
                    </div>

                    {/* obgyn_AvgPatientTime */}
                    <div className="w-full md:w-1/2 px-3 mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-avg-patient-time">
                            Average Patient Time
                        </label>

                        <input
                            {...register("obgyn_AvgPatientTime", {
                                required: { value: true, message: "This field is required" },
                                validate: value => value >= 0 || "Enter a valid average patient time."
                            })}
                            className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn_num-of-patients"
                            type="number"
                            placeholder="number" />
                        {errors.obgyn_AvgPatientTime && <p className="text-red-500 text-xs italic">{errors.obgyn_AvgPatientTime.message}</p>}
                    </div>

                    {/* obgyn_NumOfPatients */}
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-obgyn_num-of-patients">
                            Number of Patients
                        </label>
                        <input
                            {...register("obgyn_NumOfPatients", {
                                required: { value: true, message: "This field is required" },
                                validate: value => value >= 0 || "Enter a valid number of patients."
                            })}
                            className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn-num-of-patients"
                            type="number"
                            placeholder="number" />
                        {errors.obgyn_NumOfPatients && <p className="text-red-500 text-xs italic">{errors.obgyn_NumOfPatients.message}</p>}
                    </div>

                    {/* obgyn_QualityRisk */}
                    <div className="w-full md:w-1/2 px-3  mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-quality-risk">
                            Quality Risk
                        </label>
                        <input
                            {...register("obgyn_QualityRisk", {
                                required: { value: true, message: "This field is required" },
                                validate: value => value >= 0 || "Enter a valid quality risk."
                            })}
                            className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn-quality-risk"
                            type="number"
                            placeholder="number" />
                        {errors.obgyn_QualityRisk && <p className="text-red-500 text-xs italic">{errors.obgyn_QualityRisk.message}</p>}
                    </div>

                    {/* obgyn_TotalHours */}
                    <div className="w-full md:w-1/2 px-3  mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-total-hours">
                            Total Hours
                        </label>
                        <input
                            {...register("obgyn_TotalHours", {
                                required: { value: true, message: "This field is required" },
                                validate: value => value >= 0 || "Enter a valid total of hours."
                            })}
                            className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn-total-hours"
                            type="number"
                            placeholder="number" />
                        {errors.obgyn_TotalHours && <p className="text-red-500 text-xs italic">{errors.obgyn_TotalHours.message}</p>}
                    </div>

                    {/* obgyn_BurnoutRisk */}
                    <div className="w-full md:w-1/2 px-3  mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-burnout-risk">
                            Burnout Risk
                        </label>
                        <input
                            {...register("obgyn_BurnoutRisk", {
                                required: { value: true, message: "This field is required" },
                                validate: value => value >= 0 || "Enter a valid total of hours."
                            })}
                            className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn-burnout-risk"
                            type="number"
                            placeholder="number" />
                        {errors.obgyn_BurnoutRisk && <p className="text-red-500 text-xs italic">{errors.obgyn_BurnoutRisk.message}</p>}
                    </div>


                    <button type="submit"
                        className="my-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Data</button>

                </div>

            </form>
        </div>

    )

}
export default ProviderInputs2;