import React, { useContext, useEffect, useState } from 'react'
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from 'moment/moment';
import { TaskContext } from '../../../contexts/TaskContext';

const ModalEdit = ({  task, setModalEdit }) => {
    
    const { tasks, setTasks } = useContext(TaskContext)

    const dateFormat = 'YYYY-MM-DD';

    const [data, setData] = useState({
        id: task.id,
        title: task.title,
        percentage_task: task.percentage_task,
        date: task.date,
        status: task.status,
    })

    const handelChange = (event) => {
        setData((prev) => {
            return {...prev, [event.target.name] : event.target.value}
        });
    }

    const handelDelete = () => {
        setTasks(tasks.filter(x => x.id !== data.id))
        setModalEdit(false)
    }

    const handelEdit = () => {
        let tasksEdit = tasks.map(x => {
            if(x.id === data.id){
                x.title = data.title
                if(data.status === 'todo-done') {
                    x.percentage_task = 10
                }else{
                    x.percentage_task = data.percentage_task
                }
                x.date = data.date
                x.status = data.status
            }
            return x
        })
        setTasks(tasksEdit)
        setModalEdit(false)
    } 
    return (
        <div className='fixed z-500'>
                <div className="close bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-50" onClick={() => setModalEdit(false)}></div>
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-auto p-4 max-w-md ">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="close absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => setModalEdit(false)}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit task {data.title}</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                    <input type="text" name="title" id="title" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="write here..." value={data.title} required="" onChange={(e) => handelChange(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="percentage-task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task completion from 0 to 10</label>
                                    <input type="number" name="percentage_task" id="percentage-task" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" min="0" max="10" value={data.percentage_task} required="" onChange={(e) => handelChange(e)}/>
                                </div>
                                <div>
                                    <label htmlFor="task-status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Task status</label>
                                    <select id="task-status" className="border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='status' onChange={(e) => handelChange(e)} defaultValue={data.status}>
                                        <option >Choose a status</option>
                                        <option value="todo">To do</option>
                                        <option value="in-progress">In progress</option>
                                        <option value="todo-done">Done</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Task start date</label>
                                    <DatePicker defaultValue={moment(data.date, dateFormat)} style={{width: '100%', padding: '10px', borderRadius: '8px' }} onChange={(value) => setData((prev) => {
                                        return {...prev, date: moment(value).format('YYYY-MM-DD')}
                                    })}/>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handelEdit()}>
                                        Edit
                                    </button>
                                    <button type="button" class="focus:outline-none text-white bg-red-700 border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handelDelete()}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ModalEdit