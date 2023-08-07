import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import router, { useRouter } from 'next/router';
import { FieldError, UseControllerProps, useForm, Controller } from "react-hook-form";
import FormDataContext from './FormDataContext';


type FormValues = {
    obgyn_sentiment: number;
    providerNotes: string;
};

const InputForSentiment: React.FC = () => {
    const { formData, setFormData } = useContext(FormDataContext);

    // State to hold the user input from the text box
    const [providerNotes, setProviderNotes] = useState('');

    // State to store the response from the server
    const [sentimentScore, setSentimentScore] = useState<number | null>(null);

    // Function to handle the submit button click
    const handleSubmit = async () => {
        try {
            // Send a POST request to the server with the user input as the request body
            const response = await axios.post('http://localhost:3001/sentiment-analysis', {
                text: providerNotes,
            });

            // Extract the roundedScore value from the response and store it in the state
            setSentimentScore(response.data?.roundedScore ?? null);

            // Update the formData with the sentiment score
            setFormData((currentData) => ({
                ...currentData,
                obgyn_sentiment: response.data?.roundedScore ?? null,
            }));
        } catch (error) {
            console.error('Error submitting sentiment analysis:', error);
        }

        router.push('/alerts/PredictionsPage')

    };

    // Function to handle changes in the text box input
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setProviderNotes(event.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="text-3xl mb-8 font-bold text-purple-700">Provider Input</div>
            <div className="flex flex-col -mx-3 mb-6">

                <div>
                    <h2 className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2">Provider Notes:</h2></div>
                {/* Text area for the user to input provider notes */}
                <div ><textarea
                    value={providerNotes}
                    onChange={handleChange}
                    className="appearance-none block w-full h-72 bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"/></div>

                {/* Button to submit the notes */}
                <button onClick={handleSubmit}
                    className="my-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    submit to watsonx for sentiment analysis</button>

            </div>
        </div>
    );
};

export default InputForSentiment;