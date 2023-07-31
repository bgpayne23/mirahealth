// NOT USING

import React from "react";
import PregnancyPredictionsDisplay from "@/components/PregnancyPredictionsDisplay";
import Layout from "@/components/Layout";

// Define the PredictionData interface here
interface PredictionData {
    prediction: number;
    score: number;
}

const PredictionsPage: React.FC = () => {
    // Assume you have received the prediction data from the server
    const predictionData: PredictionData = {
        prediction: .9,
        score: 0.12345678,
    };

    return (
    <Layout>
    <div className="bg-sky-50">
        <div className="container mx-auto mt-9 ">
            <PregnancyPredictionsDisplay data={predictionData} />
        </div>
    </div>
    </Layout>
    );
};

export default PredictionsPage;
