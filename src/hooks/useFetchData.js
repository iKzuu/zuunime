import { fetchData } from "@/service/apiClient";
import { useEffect, useState } from "react";

export function useFetchData(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const  [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData(endpoint);
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [endpoint]);

    return  { data, loading, error };

}