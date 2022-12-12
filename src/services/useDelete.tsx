import { useEffect, useState } from "react";
import api from "./api";

export function useDelete(id: string | null) {
    const [deleted, setDeleted] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            api.delete(`/tasks/id/${id}`)
                .then((response) => {
                    setDeleted(id);
                    console.log(id + " has been deleted");
                })
                .catch((err) => {
                    setError(err);
                    console.log(err);
                });
        }
    }, [id]);

    return { deleted, error };
}
