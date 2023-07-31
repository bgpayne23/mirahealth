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
    DOBDay: number;
    DOBMonth: number;
    DOBYear: number;
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
    const dateString = "1989, 11, 5"
     
    
    // todo: add hover message, and setTimeout.
    const [isHovered, setIsHovered] = useState(false);
    const {formData, setFormData} = useContext(FormDataContext);
    const router = useRouter();
 
    const onSubmit = (data: FormValues) => {
        
        const dobDay = parseInt(data.DOBDay as any);
        const dobMonth = parseInt(data.DOBMonth as any) - 1;  // because of 0 index
        const dobYear = parseInt(data.DOBYear as any);
        const today = new Date();
        const dob = new Date(dobYear, dobMonth, dobDay);
    
     // Age = today - dob, but you have to check which month it is and conditionally subtract.
        let age = today.getFullYear() - dobYear;
        if (today.getMonth() < dobMonth || 
            (today.getMonth() === dobMonth && today.getDate() < dobDay)) {
             age--;  
            }

        data.Age = age;    
        data.SystolicBP = parseInt(data.SystolicBP as any);
        data.DiastolicBP = parseInt(data.DiastolicBP as any);
        data.BS = parseInt(data.BS as any);
        data.BodyTemp = parseInt(data.BodyTemp as any);
        data.HeartRate = parseInt(data.HeartRate as any);
        console.log(data);

       
        
        
        
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
        className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
        htmlFor="grid-dob-month"
    >
        Date of Birth
    </label>

    <div className="flex space-x-3">
        <div className="w-1/3">  
            <select
                {...register("DOBMonth", {
                    required: {
                        value: true,
                        message: "This field is required",
                    },
                })}
                className={`appearance-none block w-full bg-light-200 text-gray-700 border 
                    ${errors.DOBMonth ? "border-red-500" : "border-gray-200"} 
                    rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg 
                    focus:ring-2 focus:ring-purple-600`}
                id="grid-dob-month"
                placeholder="Month"
            >
                
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03"> March</option>
                <option value="04"> April</option>
                <option value="05"> May</option>
                <option value="06"> June</option>
                <option value="07"> July</option>
                <option value="08"> August</option>
                <option value="09"> September</option>
                <option value="10"> October</option>
                <option value="11"> November</option>
                <option value="12"> December</option>

               
            </select>
            {errors.DOBMonth && (
                <p className="text-red-500 text-xs italic">
                    {errors.DOBMonth.message}
                </p>
            )}
        </div>

        <div className="w-1/3">  
            <input
                {...register("DOBDay", {
                    required: {
                        value: true,
                        message: "This field is required",
                    },
                    validate: (value) =>
                        value >= 1 && value <= 31 || "Enter a valid day.",
                })}
                className={`appearance-none block w-full bg-light-200 text-gray-700 border 
                    ${errors.DOBDay ? "border-red-500" : "border-gray-200"} 
                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg 
                    focus:ring-2 focus:ring-purple-600`}
                id="grid-dob-day"
                type="number"
                placeholder="Day"
            />
            {errors.DOBDay && (
                <p className="text-red-500 text-xs italic">
                    {errors.DOBDay.message}
                </p>
            )}
        </div>

        <div className="w-1/3">  
            <input
                {...register("DOBYear", {
                    required: {
                        value: true,
                        message: "This field is required",
                    },
                    validate: (value) =>
                        value >= 1900 && value <= new Date().getFullYear() || "Enter a valid year.",
                })}
                className={`appearance-none block w-full bg-light-200 text-gray-700 border 
                    ${errors.DOBYear ? "border-red-500" : "border-gray-200"} 
                    rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg 
                    focus:ring-2 focus:ring-purple-600`}
                id="grid-dob-year"
                type="number"
                placeholder="Year"
            />
            {errors.DOBYear && (
                <p className="text-red-500 text-xs italic">
                    {errors.DOBYear.message}
                </p>
            )}
        </div>
    </div>
</div>

                <div className="w-full md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-ethnicity"
                    >
                        Ethnicity
                    </label>
                    <div className="relative">
                    <select
                        className="block appearance-none w-full bg-light-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                        focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-lg"
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
                <label className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2" htmlFor="grid-insurance">
                    Insurance Type
                </label>
                <div className="relative">
                    <select className="block appearance-none w-full bg-light-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-lg"
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
                        className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-income"
                    >
                        income
                    </label>
                    <div className="relative">
                    <select
                        className="block appearance-none w-full bg-light-200 border border-gray-200 
                        text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
                        focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-lg"
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
                        className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-state"
                    >
                        Location
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-light-200 border border-gray-200 
                            text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
                            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white 
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
                        className="block uppercase tracking-wide text-purple-500 text-md font-bold mb-2"
                        htmlFor="grid-zip"
                    >
                        Body Temp
                    </label>
                    <input
                        className="appearance-none block w-full bg-light-200 text-gray-700 
      border border-gray-200 rounded py-3 px-4 leading-tight 
      focus:outline-none focus:bg-white shadow-lg focus:ring-2 focus:ring-purple-600"
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
                    rounded-md shadow-sm text-md font-medium text-white bg-purple-500 
                    hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500"
                >
                    Submit Data
                </button>
            </div>
        </form>
    );
};
export default PatientInputs;
