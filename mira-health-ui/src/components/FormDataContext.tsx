import React from 'react';
type FormData = {
    Age: number;
    Ethnicity: string;
    Payer: string;
    Location: string;
    Income: string;
    SystolicBP: number;
    DiastolicBP: number;
    BS: number;
    BodyTemp: number;
    HeartRate: number;
    obgyn_sentiment: number;
    obgyn_AvgPatientTime: number;
    obgyn_NumOfPatients: number;
    obgyn_QualityRisk: number;
    obgyn_TotalHours: number;
    obgyn_BurnoutRisk: number;
    obgyn_Location: string;
};

type FormContextType = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
const FormDataContext = React.createContext<FormContextType>({
    formData: {
        // Initialize all fields with default values
        Age: 0,
        Ethnicity: '',
        Payer: '',
        Location: '',
        Income: '',
        SystolicBP: 0,
        DiastolicBP: 0,
        BS: 0,
        BodyTemp: 0,
        HeartRate: 0,
        obgyn_sentiment: 0,
        obgyn_AvgPatientTime: 0,
        obgyn_NumOfPatients: 0,
        obgyn_QualityRisk: 0,
        obgyn_TotalHours: 0,
        obgyn_BurnoutRisk: 0,
        obgyn_Location: '',
    },
    setFormData: () => {},
});

export const FormDataProvider = FormDataContext.Provider;

export default FormDataContext;