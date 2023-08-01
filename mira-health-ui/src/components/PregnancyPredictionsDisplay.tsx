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

const PregnancyPredictionsDisplay: React.FC<PregnancyPredictionsProps> = ({
    data,
}) => {
    // Check if the prediction number is greater than 0.7
    const isPredictionRed = data.prediction > 0.7;

    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-md ${
                isPredictionRed ? 'animate-pulse-red' : ''
            }`}
        >
            <h2 className="text-2xl font-bold mb-4">Pregnancy Predictions</h2>
            <div>
                <p className="text-lg font-bold">Likelihood:</p>
                <p className="text-xl">{(data.prediction * 100)}%</p>
            </div>
            <div>
                <p className="text-lg font-bold">Score:</p>
                <p className="text-xl">{data.score}</p>
            </div>
        </div>
    );
};

export default PregnancyPredictionsDisplay;