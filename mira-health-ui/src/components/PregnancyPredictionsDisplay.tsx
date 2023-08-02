import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import FormDataContext from "./FormDataContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bar from './ui/bar';
import Link from "next/link";

type PredictionData = {
    prediction: number;
    score: number;
};


// You might not need this prop anymore
interface PregnancyPredictionsProps {
    data: PredictionData;
}

const PregnancyPredictionsDisplay: React.FC<PregnancyPredictionsProps> = ({ }) => {
    const router = useRouter();
    const [apiResponse, setApiResponse] = useState<PredictionData>({
        prediction: 0,
        score: 0
    });
    const { formData } = useContext(FormDataContext);

    useEffect(() => {
        const requiredFields = [
            "obgyn_AvgPatientTime",
            "obgyn_NumOfPatients",
            "obgyn_QualityRisk",
            "obgyn_TotalHours",
            "obgyn_BurnoutRisk",
            "obgyn_Location",
            "Age",
            "Ethnicity",
            "Payer",
            "Location",
            "Income",
            "SystolicBP",
            "DiastolicBP",
            "BS",
            "BodyTemp",
            "HeartRate",
            "obgyn_sentiment",
        ];

        const hasAllRequiredFields = (obj: Record<string, any>): boolean => {
            return requiredFields.every((field) => Object.keys(obj).includes(field));
        };
        if (hasAllRequiredFields(formData)) {
            // Make the axios request
            console.log(formData);
            axios.post("http://34.229.92.101/", formData)
                .then(function (response) {
                    console.log(response);
                    setApiResponse({
                        prediction: response.data.prediction,
                        score: response.data.score,
                    });
                })
                .catch(function error(error) {
                    console.log(error);
                });
        }
    }, [formData]);

    const onSubmit = () => {
        router.push('/inputs/Recommendations')
    }

    const percentage = parseFloat((Number(apiResponse.score) * 100).toFixed(2));
    const pathColor = percentage >= 50 ? '#ef4444' : '#34d399';
    const highRiskMessage = "Patient has high likelihood of HDP";
    const lowRiskMessage = "Patient has low likelihood of HDP";
    //const mediumRiskMessage = "Patient has medium likelihood of HDP";
    const messageToDisplay = percentage >= 50 ? highRiskMessage : lowRiskMessage;

    const value = 75;
    const maxValue = 100;


    return (

        <div className="flex flex-col justify-center items-center h-screen mt-32 w-screen">
            <div className="flex justify-center" style={{ width: 300, height: 300 }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${(Number(apiResponse.score) * 100).toFixed(2)}%`}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        textSize: '18px',
                        pathTransitionDuration: 0.5,
                        pathColor: `${pathColor}`,
                        textColor: '#1c1917',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                    className=''
                />
            </div>

            <div className="flex justify-center items-start mt-8 w-1/2">
                <div className={`p-4 mb-4 rounded-md shadow-md flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-green-300' : 'bg-red-300'}`}>
                    <div className="text-center py-1">
                        <p className="text-3xl font-bold">Alert</p>
                        <p className="text-2xl">{messageToDisplay}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start mt-1 w-full">
                <div className={`mt-4 shadow-md w-1/4 flex flex-col bg-white-100 border-2`}>
                    <div className="text-center py-1">
                        <div className="text-xl font-bold m-2">Health Factors</div>
                        <Bar value={90} max={maxValue} color="#0ea5e9" height={30} factorName={"BP"} />
                        <Bar value={value} max={maxValue} color="#0ea5e9" height={30} factorName={"BS"} />
                        <Bar value={60} max={maxValue} color="#0ea5e9" height={30} factorName={"Age"} />
                    </div>
                </div>
                <div className={`mt-4 shadow-md w-1/4 flex flex-col bg-white-100 border-2`}>
                    <div className="text-center py-1">
                        <div className="text-xl font-bold m-2">Socioeconomic Factors</div>
                        <Bar value={95} max={maxValue} color="#0ea5e9" height={30} factorName={"Location"} />
                        <Bar value={value} max={maxValue} color="#0ea5e9" height={30} factorName={"OBGYN"} />
                        <Bar value={55} max={maxValue} color="#0ea5e9" height={30} factorName={"Payer"} />
                    </div>
                </div>
            </div>


            <div className="w-screen flex justify-center mt-8">
                <Link href="/alerts/Recommendations">
                    <button

                        type="submit"
                        className="m-8 w-80 flex justify-center py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 
                    hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500"
                    >
                        Show Recommendations
                    </button>
                </Link>
            </div>

        </div>






    );
};

export default PregnancyPredictionsDisplay;