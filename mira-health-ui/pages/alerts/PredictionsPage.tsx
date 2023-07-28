import React from 'react';
import { useRouter } from 'next/router';
import PregnancyPredictionsDisplay from "@/components/PregnancyPredictionsDisplay";
import Layout from '@/components/Layout';
 
interface PredictionData {
    prediction: number;
    score: number;
}

const PredictionsPage: React.FC = () => {
    const router = useRouter();
    const { prediction, score } = router.query;

    const predictionData: PredictionData = {
        prediction: prediction ? parseFloat(prediction as string) : 0,
        score: score ? parseFloat(score as string) : 0,
    };

    return (
      <Layout>
        <div className="container mx-auto mt-8">
            <PregnancyPredictionsDisplay data={predictionData} />
        </div>
        </Layout>
    );
};

export default PredictionsPage;