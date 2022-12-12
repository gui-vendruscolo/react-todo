import React from "react";
import { useState, useEffect } from "react";

import { useFetch } from "../../services/useFetch";

import "./taskAdd.css";
import "../../variables.css";
import { usePost } from "../../services/usePost";
import { TaskModel } from "../../models/TaskModel";

export function TaskAdd(props: any) {
    // const { response, error, loading } = useFetch();

    const [body, setBody] = useState<TaskModel | null>(null);
    const { data, error } = usePost("/tasks", body);
    const [inputValue, setValue] = useState("");

    useEffect(() => {
        props.submitFunc();
        setBody(null);
    }, [data]);

    useEffect(() => {
        console.log("Data changed, here it is: " + data);
    }, [data]);

    const submit = () => {
        const taskModel: TaskModel = {
            taskName: inputValue,
        };

        setBody(taskModel);
        setValue("");
    };

    const changeValue = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div id="component-container">
            <input
                id="text-input"
                type="text"
                placeholder="insert new task here"
                value={inputValue}
                onChange={(e) => changeValue(e)}
            />
            <button type="button" id="add-button" onClick={() => submit()}>
                add
            </button>
        </div>
    );
}
