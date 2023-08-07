import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import { USStates } from '@/lib/utils';
import { FieldError, UseControllerProps, useForm, Controller } from "react-hook-form";
import axios from 'axios';
import FormDataContext from './FormDataContext';

type FormValues = {

    obgyn_sentiment: string;


}

const InputForSentiment = () => {


    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        mode: 'onBlur',
    })
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState('');
    const { formData, setFormData } = useContext(FormDataContext);



    function onSubmit(data: FormValues) {

        data.obgyn_sentiment = data.obgyn_sentiment;


        console.log(data);

        // setFormData(currentData => ({ ...currentData, ...data }));
        router.push('/alerts/PredictionsPage')


    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
                <div className="text-3xl mb- font-bold text-purple-700">Provider Input</div>
                <div className="flex flex-wrap -mx-3 mb-6">


                    {/* Text Box for Sentiment, button: Send to Watson NLU, */}
                    <div className="w-full h-48 px-3 py-12 mb-4">
                        <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                            htmlFor="grid-obgyn-sentiment">
                            Provider Notes
                        </label>
                        <input
                            {...register("obgyn_sentiment", {
                                required: { value: true, message: "This field is required" }
                            })}
                            className="appearance-none block w-full h-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
                            id="grid-obgyn-sentiment"
                            type="text"
                            placeholder="Provider Notes" />
                        {errors.obgyn_sentiment && <p className="text-red-500 text-xs italic">{errors.obgyn_sentiment.message}</p>}
                    </div>


                    <button type="submit"
                        className="my-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send to watsonx for sentiment analysis</button>

                </div>

            </form>
        </div>

    )

}
export default InputForSentiment;