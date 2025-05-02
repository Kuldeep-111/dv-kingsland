import { useState } from 'react';
import { useRouter } from "next/navigation";

export const useFormSubmit = (projectName) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (formDetails) => {
        setLoading(true);
        setResponse(null);
        setError(null);

        const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4887&qSenderName=${encodeURIComponent(
            formDetails.name
        )}&qMobileNo=${encodeURIComponent(formDetails.contact)}&qEmailID=${encodeURIComponent(
            formDetails.email
        )}&qQueryMessage=${encodeURIComponent(formDetails.message)}&qProjectName=${encodeURIComponent(projectName)}`;

        try {
            const res = await fetch(apiUrl, { method: "GET" });
            if (!res.ok) throw new Error('Failed to submit form');
            setResponse({ success: true, message: 'Form submitted successfully!' });
            router.push("thank-you");
        } catch (err) {
            const message = err.message || 'Something went wrong';
            setError(message);
            setResponse({ success: false, message });
        } finally {
            setLoading(false);
        }
    };

    return {
        handleSubmit,
        loading,
        error,
        response,
    };
};
