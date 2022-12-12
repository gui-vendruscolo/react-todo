import { useState, useEffect } from "react";
import { TaskModel } from "../models/TaskModel";
import api from "./api";

export function usePost(url: string, requestBody: TaskModel | null) {
    const [data, setData] = useState<TaskModel>();
    const [error, setError] = useState();

    useEffect(() => {
        if (requestBody) {
            api.post(url, requestBody)
                .then((response) => {
                    setData(response.data);
                    console.log(response.data + " has been posted.");
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    console.log();
                });
        }
    }, [url, requestBody]);

    return { data, error };
}
