import React from "react";
import { useState, useEffect } from "react";

import { FaTrash } from "react-icons/fa";

import "./task.css";
import "../../variables.css";
import { useDelete } from "../../services/useDelete";

export function Task(props: any) {
    const [id, setId] = useState<string | null>(null);
    const [status, setStatus] = useState(false);
    const { deleted, error } = useDelete(id);

    useEffect(() => {
        props.onDelete();
    }, [deleted]);

    const deleteTask = () => {
        setId(props.taskId);
    };

    const updateTaskStatus = () => {
        setStatus(!status);
    };

    return (
        <div className="task" id={"task" + props.index} key={props.index}>
            <div className="status">
                <input
                    type="checkbox"
                    className="status-input"
                    onChange={() => updateTaskStatus()}
                />
            </div>
            <div className="taskName-container">
                <p className={"taskName " + status}>{props.taskName}</p>
            </div>
            <div className="dateAdded-container">
                <p className="dateAdded">{props.dateAdded}</p>
            </div>
            <div className="deleteButton" onClick={() => deleteTask()}>
                <FaTrash />
            </div>
        </div>
    );
}
