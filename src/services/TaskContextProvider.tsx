import React, { useState } from "react";

const TaskContext = React.createContext(null);

export function useTasks() {
    return React.useContext(TaskContext);
}

export function TaskContextProvider({ children }: any) {
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(false);

    const value: any = [taskList, loading, setTaskList, setLoading];

    return (
        <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
    );
}
