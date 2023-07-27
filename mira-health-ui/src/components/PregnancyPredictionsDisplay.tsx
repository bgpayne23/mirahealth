import React from 'react';

type PredictionData = {
  prediction: number;
  score: number;
};

interface PregnancyPredictionsProps {
  data: PredictionData;
}
// todo: update styling and presentation! 
// todo: pass data from response to here
const PregnancyPredictionsDisplay: React.FC<PregnancyPredictionsProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Pregnancy Predictions</h2>
      <div>
        <p className="text-lg font-bold">Prediction:</p>
        <p className="text-xl">{data.prediction}</p>
      </div>
      <div>
        <p className="text-lg font-bold">Score:</p>
        <p className="text-xl">{data.score}</p>
      </div>
    </div>
  );
};

export default PregnancyPredictionsDisplay;