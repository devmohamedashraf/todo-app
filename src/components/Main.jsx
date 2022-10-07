import React, { useState } from 'react'
import TaskContextProvider from '../contexts/TaskContext'
import Header from './global/Header'
import Tasks from './MainComponent/Tasks'

const Main = () => {
    return (
        <div className='lg:ml-[90px]'>
            <Header />
            <TaskContextProvider>
                <Tasks />
            </TaskContextProvider>
        </div>
    )
}

export default Main