import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import FormDataContext from "./FormDataContext";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Bar from './ui/bar';

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
        score: 0
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

    const percentage = parseFloat((Number(apiResponse.score) * 100).toFixed(2));
    const pathColor = percentage >= .5 ? '#ef4444' : '#34d399';
    const highRiskMessage = "Patient has high likelihood of HDP";
    const lowRiskMessage = "Patient has low likelihood of HDP";
    //const mediumRiskMessage = "Patient has medium likelihood of HDP";
    const messageToDisplay = percentage >= .5 ? highRiskMessage : lowRiskMessage;

    const value = 75;
    const maxValue = 100;


    return (

        <div className="flex flex-col justify-center items-center h-screen mt-16 w-screen">
            <div className="flex justify-center" style={{ width: 300, height: 300 }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${(Number(apiResponse.score) * 100).toFixed(2)}%`}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        textSize: '18px',
                        pathTransitionDuration: 0.5,
                        pathColor: `${pathColor}`,
                        textColor: '#1c1917',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                    className=''
                />
            </div>

            <div className="flex justify-center items-start mt-8">
                <div className={`p-4 mb-4 rounded-md shadow-md flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-green-300' : 'bg-red-300'}`}>
                    <div className="text-center py-1">
                        <p className="text-3xl font-bold">Alert</p>
                        <p className="text-2xl">{messageToDisplay}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-start mt-1 w-full">
                <div className={`mt-4 shadow-md w-1/4 flex flex-col bg-white-100 border-2`}>
                    <div className="text-center py-1">
                        <div className="text-xl font-bold">Health Factors</div>
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"BP"} />
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"BS"} />
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"Age"} />
                    </div>
                </div>
                <div className={`mt-4 shadow-md w-1/4 flex flex-col bg-white-100 border-2`}>
                    <div className="text-center py-1">
                        <div className="text-xl font-bold">Socioeconomic Factors</div>
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"Location"} />
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"OBGYN"} />
                        <Bar value={value} max={maxValue} color="purple" height={30} factorName={"Payer"} />
                    </div>
                </div>
            </div>
        </div>


        // <div className="flex flex-col justify-center items-start h-screen mt-16">
        //     <div className="flex">
        //         <div className="flex justify-center"
        //             style={{ width: 300, height: 300 }}>
        //             <CircularProgressbar
        //                 value={percentage}
        //                 text={`${(Number(apiResponse.score) * 100).toFixed(2)}%`}
        //                 styles={buildStyles({
        //                     // Rotation of path and trail, in number of turns (0-1)
        //                     // rotation: 0.25,

        //                     // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //                     strokeLinecap: 'round',

        //                     // Text size
        //                     textSize: '18px',

        //                     // How long animation takes to go from one percentage to another, in seconds
        //                     pathTransitionDuration: 0.5,

        //                     // Can specify path transition in more detail, or remove it entirely
        //                     // pathTransition: 'none',

        //                     // Colors
        //                     pathColor: `${pathColor}`,
        //                     textColor: '#1c1917',
        //                     trailColor: '#d6d6d6',
        //                     backgroundColor: '#3e98c7',
        //                 })}
        //                 className='' />
        //         </div>

        //     </div>

        //     <div className="flex justify-center items-start h-screen mt-8">
        //         <div className={`p-1 rounded-md shadow-md w-96 flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-purple-300' : 'bg-red-300'}`}>
        //             <div className="text-center py-1">
        //                 <p className="text-3xl font-bold">Alert:</p>
        //                 <p className="text-4xl">{messageToDisplay}</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="flex justify-center items-start h-screen mt-1">
        //         <div className={`p-1 rounded-md shadow-md w-96 flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-purple-300' : 'bg-red-300'}`}>
        //             <div className="text-center py-1">
        //                 <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"BP"} />
        //                 <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"BS"} />
        //                 <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"Age"} />
        //             </div>
        //         </div>
        //         <div className={`p-1 rounded-md shadow-md w-96 flex flex-col items-center ${apiResponse.score < 0.5 ? 'bg-purple-300' : 'bg-red-300'}`}>
        //             <div className="text-center py-1">
        //                 <div className="text-center py-1">
        //                     <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"Location"} />
        //                     <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"OBGYN"} />
        //                     <Bar value={value} max={maxValue} color="purple" width={300} height={30} factorName={"Payer"} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </div>



    );
};

export default PregnancyPredictionsDisplay;