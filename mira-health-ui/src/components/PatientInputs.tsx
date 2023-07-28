import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
    FieldError,
    SubmitHandler,
    UseControllerProps,
    useForm,
} from "react-hook-form";
import axios from "axios";
import FormDataContext from "./FormDataContext";


type FormValues = {

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
    HDP: number;
};

const PatientInputs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onBlur",
    });

 

    // todo: add hover message, and setTimeout.
    const [isHovered, setIsHovered] = useState(false);
    const {formData, setFormData} = useContext(FormDataContext);
    const router = useRouter();


    const onSubmit = (data: FormValues) => {
       
        data.Age = parseInt(data.Age as any);
        data.SystolicBP = parseInt(data.SystolicBP as any);
        data.DiastolicBP = parseInt(data.DiastolicBP as any);
        data.BS = parseInt(data.BS as any);
        data.BodyTemp = parseInt(data.BodyTemp as any);
        data.HeartRate = parseInt(data.HeartRate as any);
        console.log(data);
        
        // pushing form data to predictions page
        
        setFormData(currentData => ({ ...currentData, ...data }));
        router.push('/inputs/Provider')
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg mt-9"
        >
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-age"
                    >
                        Age
                    </label>
                    <input
                        {...register("Age", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            validate: (value) =>
                                value >= 9 || "Enter a valid age.",
                        })}
                        className={`appearance-none block w-full bg-light-200 text-gray-700 border 
  ${errors.Age ? "border-red-500" : "border-gray-200"} 
  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg 
  focus:ring-2 focus:ring-blue-600`}
                        id="grid-first-name"
                        type="number"
                        placeholder=""
                    />
                    {errors.Age && (
                        <p className="text-red-500 text-xs italic">
                            {errors.Age.message}
                        </p>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-ethnicity"
                    >
                        Ethnicity
                    </label>
                    <div className="relative">
                    <select
                        className="block appearance-none w-full bg-light-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                        focus:bg-white focus:ring-2 focus:ring-blue-600 shadow-lg"
                        {...register("Ethnicity", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-ethnicity"
                    >
                        <option value="Native">
                            American Indian or Alaska Native
                        </option>
                        <option value="Asian_Pacific">Asian or Pacific Islander</option>
                        <option value="Black">
                            Black or African American
                        </option>
            
                        <option value="White">White or Caucasian</option>
                        <option value="Hispanic">
                            Hispanic, Latino, or Spanish Origin (of any race)
                        </option>
                    </select>
                       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center 
                        px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                            </div>
                         
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2" htmlFor="grid-insurance">
                    Insurance Type
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600 shadow-lg"
                        {...register("Payer", { required: { value: true, message: "This field is required" } })} id="grid-insurance">
                        <option value="Public">Public</option>
                        <option value="Uninsured">Uninsured</option>
                        <option value="Private">Private</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-income"
                    >
                        income
                    </label>
                    <div className="relative">
                    <select
                        className="block appearance-none w-full bg-light-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                        focus:bg-white focus:ring-2 focus:ring-blue-600 shadow-lg"
                        {...register("Income", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-income"
                    >
                        <option value="Q1">
                           Q1
                        </option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">
                            Q3
                        </option>
            
                        <option value="Q4">Q4</option>
                       
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center 
                        px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                            </div>
                        </div>
                    <p className="text-gray-600 text-xs italic"></p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-state"
                    >
                        Location
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-light-200 border border-gray-200 
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
                            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white 
                            focus:border-grey-500 shadow-lg"
                            {...register("Location", {
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                            })}
                            id="grid-location"
                        >
                            <option value="Rural">Rural</option>
                            <option value="Micropolitan">Micropolitan</option>
                            <option value="Metropolitan">Metropolitan</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center 
                        px-2 text-gray-700">
                            <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-blue-500 text-md font-bold mb-2"
                        htmlFor="grid-zip"
                    >
                        Body Temp
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-blue-600"
                        {...register("BodyTemp")}
                        id="grid-zip"
                        type="number"
                        placeholder=""
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 ">
                    <label
                        className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Systolic BP
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-green-600"
                        {...register("SystolicBP", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-systolic-bp"
                        type="number"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        placeholder=""
                    />
                    <p className="text-gray-600 text-bold text-xs bg-yellow-200 px-1 w-12 italic"></p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Diastolic BP
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 shadow-lg focus:ring-2 focus:ring-green-600"
                        {...register("DiastolicBP", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-diastolic-bp"
                        type="text"
                        placeholder=""
                    />
                    <p className="text-gray-600 text-xs bg-yellow-200 px-1 w-12 italic"></p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 ">
                    <label
                        className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Heart Rate
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 focus:ring-2 focus:ring-green-600 shadow-lg"
                        {...register("HeartRate", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-heart-rate"
                        type="number"
                        placeholder=""
                    />
                    <p className="text-gray-600 text-xs italic"></p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-green-600 text-md font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Blood Sugar
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 border 
                        border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white focus:border-grey-500 focus:ring-2 focus:ring-green-600 shadow-lg"
                        {...register("BS", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        })}
                        id="grid-bs"
                        type="number"
                        placeholder=""
                    />
                    <p className="text-gray-600 text-xs italic"></p>
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent 
                    rounded-md shadow-sm text-md font-medium text-white bg-blue-500 
                    hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500"
                >
                    Submit Data
                </button>
            </div>
        </form>
    );
};
export default PatientInputs;
