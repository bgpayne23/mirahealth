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

const PregnancyPredictionsDisplay: React.FC<PregnancyPredictionsProps> = ({}) => {
    const router = useRouter();
    const [apiResponse, setApiResponse] = useState<PredictionData>({
      prediction: 0,
      score: 0,
    });
    const {formData} = useContext(FormDataContext);

    
    
    
 
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
            "HDP",
        ];
        
        const hasAllRequiredFields = (obj: Record<string, any>): boolean => {
            return requiredFields.every((field) => Object.keys(obj).includes(field));
        };
        if (hasAllRequiredFields(formData)) {
            // Make the axios request
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
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Pregnancy Predictions</h2>
            <div>
                <p className="text-lg font-bold">Prediction:</p>
                <p className="text-xl">{apiResponse.prediction}</p>
            </div>
            <div>
                <p className="text-lg font-bold">Score:</p>
                <p className="text-xl">{apiResponse.score}</p>
            </div>
        </div>
    );
};

export default PregnancyPredictionsDisplay;