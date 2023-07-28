// NOT USING

import React from "react";
import PregnancyPredictionsDisplay from "@/components/PregnancyPredictionsDisplay";

// Define the PredictionData interface here
interface PredictionData {
    prediction: number;
    score: number;
}

const PredictionsPage: React.FC = () => {
    // Assume you have received the prediction data from the server
    const predictionData: PredictionData = {
        prediction: 0,
        score: 0.12345678,
    };

    return (
        <div className="container mx-auto mt-8">
            <PregnancyPredictionsDisplay data={predictionData} />
        </div>
    );
};

export default PredictionsPage;
