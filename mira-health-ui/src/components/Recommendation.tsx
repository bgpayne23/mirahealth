import React from 'react';

// Define a TypeScript interface for the component's props
interface RecommendationProps {
  message?: string;
}

// Define the functional component using TypeScript
const Recommendation: React.FC<RecommendationProps> = ({ message = 'This is a recommendation from watsonx' }) => {
  return (
    <div className="flex w-full p-4 m-4 rounded-md border border-purple-800 shadow-md text-purple-800">
      <h1>{message}</h1>
    </div>
  );
};

export default Recommendation;
