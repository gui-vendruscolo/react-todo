import { useState, useEffect } from "react";

import { TaskModel } from "../models/TaskModel";
import api from "./api";

export function useFetch(path: string, recall: boolean) {
    const [data, setData] = useState<TaskModel[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/${path}`)
            .then((response) => {
                setData(response.data.content);
                console.log("fetching data");
            })
            .catch((err) => {
                setError(err);
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [recall, path]);

    return { data, error, loading };
}
