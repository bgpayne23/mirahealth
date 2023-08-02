import React from "react";
import Recommendation from "./Recommendation";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface RecommendationsData {
  watsonMessage: string;
}

// interface RecommendationsDisplayProps {
//   data: RecommendationsData;
// }

const RecommendationsDisplay: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen mt-16 w-screen">
      <div className="flex flex-col justify-center items-center bg-purple-100 rounded-lg p-8 w-4/5 md:w-2/3 lg:w-1/2 shadow-md">
        <div className="text-3xl mb-4 text-purple-800">Watsonx-Generated Recommendations</div>
        <Recommendation />
        <Recommendation />
        <Recommendation />
        <Recommendation />
      </div>

      <div className="mt-8 flex w-4/5 md:w-2/3 lg:w-1/2">
        <button
          type="submit"
          className="flex-1 py-3 px-4 mr-2 rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Contest
        </button>
        <button
          type="submit"
          className="flex-1 py-3 px-4 ml-2 rounded-md shadow-sm text-xl font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default RecommendationsDisplay;
