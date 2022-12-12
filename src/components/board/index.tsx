import React from "react";
import { useState } from "react";
import "./board.css";
import "../../variables.css";
import { TaskAdd } from "../task-add";
import { useFetch } from "../../services/useFetch";
import { TaskModel } from "../../models/TaskModel";
import { Task } from "../task";

export function Board() {
    const [flag, setFlag] = useState(false);
    const { data, error, loading } = useFetch("tasks/all", flag);

    const alternateFlag = () => {
        setFlag(!flag);
    };

    return (
        <div id="board">
            <div id="new-task">
                <TaskAdd submitFunc={() => alternateFlag()} />
            </div>

            <div id="tasks">
                {!error &&
                    data?.map((e: TaskModel, i: number) => (
                        <Task
                            taskName={e!.taskName}
                            status={e!.status}
                            dateAdded={e!.dateAdded}
                            index={i}
                            taskId={e!.id}
                            key={i}
                            onDelete={() => alternateFlag()}
                        />
                    ))}
            </div>
        </div>
    );
}
