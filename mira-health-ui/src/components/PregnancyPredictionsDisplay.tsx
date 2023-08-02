import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import FormDataContext from "./FormDataContext";

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
        score: 0,
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

    return (
            <div className="flex justify-center items-start h-screen mt-48">
                <div className={`p-24 rounded-full shadow-md w-96 flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-green-300' : 'bg-red-300'}`}>
                    <div className="text-center py-4">
                        <p className="text-3xl font-bold">Prediction:</p>
                        <p className="text-4xl">{apiResponse.prediction}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold">Score:</p>
                        <p className="text-4xl">{(Number(apiResponse.score) * 100).toFixed(2)} %</p>
                    </div>
                </div>
            </div>
        

    );
};

export default PregnancyPredictionsDisplay;