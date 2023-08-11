import React from 'react';
import { useRouter } from 'next/router';
import RecommendationsDisplay from "@/components/RecommendationListDisplay";
import Layout from '@/components/Layout';

interface Recommendations {
    // prediction: number;
    // score: number;
}

const RecommendationsPage: React.FC = () => {
    const router = useRouter();
    const { recommendations } = router.query;

    // const data: Data = {
    //     prediction: prediction ? parseFloat(prediction as string) : 0,
    //     score: score ? parseFloat(score as string) : 0,
    // };

    return (
        <Layout>
            <div className="flex items-center justify-center h-screen bg-sky-50">
                <RecommendationsDisplay
                // data={predictionData} 
                />
            </div>
        </Layout>
    );
};

export default RecommendationsPage;