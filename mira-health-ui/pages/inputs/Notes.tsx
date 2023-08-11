import Layout from "@/components/Layout";
import InputForSentiment from "@/components/InputForSentiment";
import React from "react";

const Notes = () => {
    return (
        <Layout>
            <div className="flex items-center justify-center h-screen bg-sky-50">
                <InputForSentiment />
            </div>
        </Layout>
    );
};

export default Notes;
