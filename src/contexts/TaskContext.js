
import React, { createContext, useEffect, useState } from "react";


export const TaskContext = createContext([])

const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])
    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskContextProvider;