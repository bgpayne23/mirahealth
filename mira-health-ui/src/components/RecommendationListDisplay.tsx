import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import FormDataContext from "./FormDataContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bar from './ui/bar';
import Recommendation from "./Recommendation";

type RecommendationsData = {
    watsonMessage: string
};


interface RecommendationsProps {
    data: RecommendationsData;
}

const RecommendationsDisplay = ({ }) => {
    const router = useRouter();
    const [apiResponse, setApiResponse] = useState<RecommendationsData>({
        watsonMessage: "watsonx-generated recommendations go here"
    });

    return (

        <div className="flex flex-col items-center h-screen mt-16 w-screen">
            <div className="flex flex-col border-2 p-4 w-1/2">
                <div className="text-xl font-bold m-4">Watsonx-Generated Recommendations</div>
                <Recommendation />
                <Recommendation />
                <Recommendation />
                <Recommendation />

            </div>

            <div className="flex w-1/2">

                <button type="submit"
                        className="m-8 w-1/2 flex justify-center py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 
                    hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500">Contest</button>
                <button type="submit"
                        className="m-8 w-1/2 flex justify-center py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 
                    hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500">Dismiss</button>

            </div>

        </div>

    );
};

export default RecommendationsDisplay;