import { Empty } from 'antd'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import ModalEdit from './ModalEdit'

const TaskList = ({ placeholderProps, setTasks, droppableId, name, status, data }) => {
  const [modalEdit, setModalEdit] = useState(false)
  const [editTask, setEditTask] = useState({})
  const [count, setCount] = useState(0)

  const handleEdit = (task) => {
      setEditTask(task)
      setModalEdit(true)
  }

  function getStyle(style, snapshot) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`,
    };
  }

  useEffect(() => {
    let taCount = 0
    data.map((task, index) => {
        if(task.status === status){
            taCount += 1
        }
        return task
    })
    setCount(taCount)
  }, [data, status])
  return (
    <>

        <Droppable droppableId={droppableId}>
            {(droppableProvided, droppableSnapshot) => (
            <>  <div className=''>
                    <div className='p-4 border-dashed border-2 rounded-xl border-[#1C1D22] border-opacity-10 flex flex-col gap-4 dark:bg-[#24262C] '>
                        <div className="flex justify-between items-center text-[#1C1D22] text-opacity-50 dark:text-white dark:text-opacity-50">
                            {name } ({ count })
                        </div>
                        <div className="flex flex-col " ref={droppableProvided.innerRef } {...droppableProvided.draggableProps}>
                            {data.map((task, index) => {
                                return task.status === status ? 
                                (
                                    <Draggable key={task.id} draggableId={`${task.id}`} index={index} >
                                        {(droppableProvided, droppableSnapshot) => (
                                            <div 
                                            ref={droppableProvided.innerRef } 
                                            { ...droppableProvided.draggableProps } 
                                            { ...droppableProvided.dragHandleProps }
                                            style={getStyle(droppableProvided.draggableProps.style, droppableSnapshot)}
                                            className={`mb-3 rounded-xl ${task.id}`}>
                                                <div className="flex flex-col gap-2" >
                                                    <div className="w-full bg-white dark:bg-[#292B31] p-4 rounded-xl">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <span className="text-base font-bold text-[#1C1D22] dark:text-white block mb-1">{task.title}</span>
                                                            </div>
                                                            <button onClick={() => handleEdit(task)}>
                                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="26" height="26" rx="13" className='fill-white dark:fill-none dark:opacity-0' />

                                                                <rect x="1" y="1" width="24" height="24" rx="12" className='stroke-[#1C1D22] dark:stroke-white opacity-50' strokeOpacity="0.1" strokeWidth="2"/>

                                                                <circle cx="17" cy="13" r="1" className='fill-[#1C1D22] dark:fill-white'/>
                                                                <circle cx="13" cy="13" r="1" className='fill-[#1C1D22] dark:fill-white'/>
                                                                <circle cx="9" cy="13" r="1" className='fill-[#1C1D22] dark:fill-white'/>
                                                            </svg>                        
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col gap-4 my-3.5">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex items-center gap-2 text-sm font-bold text-[#1C1D22] text-opacity-50 dark:text-white dark:text-opacity-50">
                                                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g opacity="0.5">
                                                                            <path d="M2.66666 4.66661C2.66666 4.29842 2.96513 3.99994 3.33332 3.99994H3.99999C4.36818 3.99994 4.66666 4.29842 4.66666 4.66661C4.66666 5.0348 4.36818 5.33327 3.99999 5.33327H3.33332C2.96513 5.33327 2.66666 5.0348 2.66666 4.66661ZM5.99999 4.66661C5.99999 4.29842 6.29847 3.99994 6.66666 3.99994H12.6667C13.0348 3.99994 13.3333 4.29842 13.3333 4.66661C13.3333 5.0348 13.0348 5.33327 12.6667 5.33327H6.66666C6.29847 5.33327 5.99999 5.0348 5.99999 4.66661ZM2.66666 7.99994C2.66666 7.63175 2.96513 7.33327 3.33332 7.33327H3.99999C4.36818 7.33327 4.66666 7.63175 4.66666 7.99994C4.66666 8.36813 4.36818 8.66661 3.99999 8.66661H3.33332C2.96513 8.66661 2.66666 8.36813 2.66666 7.99994ZM5.99999 7.99994C5.99999 7.63175 6.29847 7.33327 6.66666 7.33327H12.6667C13.0348 7.33327 13.3333 7.63175 13.3333 7.99994C13.3333 8.36813 13.0348 8.66661 12.6667 8.66661H6.66666C6.29847 8.66661 5.99999 8.36813 5.99999 7.99994ZM2.66666 11.3333C2.66666 10.9651 2.96513 10.6666 3.33332 10.6666H3.99999C4.36818 10.6666 4.66666 10.9651 4.66666 11.3333C4.66666 11.7015 4.36818 11.9999 3.99999 11.9999H3.33332C2.96513 11.9999 2.66666 11.7015 2.66666 11.3333ZM5.99999 11.3333C5.99999 10.9651 6.29847 10.6666 6.66666 10.6666H12.6667C13.0348 10.6666 13.3333 10.9651 13.3333 11.3333C13.3333 11.7015 13.0348 11.9999 12.6667 11.9999H6.66666C6.29847 11.9999 5.99999 11.7015 5.99999 11.3333Z" className='fill-[#1C1D22] dark:fill-white' />
                                                                        </g>
                                                                    </svg>                                             
                                                                    Progress
                                                                </div>
                                                                <span className="text-[#1C1D22] dark:text-white font-bold text-sm">{task.percentage_task}/10</span>
                                                            </div>
                                                            <div className="relative">
                                                                <div className="w-full rounded-sm bg-[#1C1D22] bg-opacity-10 dark:bg-white dark:bg-opacity-10 h-1"></div>
                                                                <div className={`absolute top-0 rounded-sm ${task.percentage_task < 10 ? 'bg-[#FFA048]' : 'bg-[#78D700]'} h-1`} style={{ width: `${task.percentage_task * 10}%` }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <div className="p-2 px-4 text-sm font-semibold text-[#888DA7] bg-gray-200 dark:bg-white dark:bg-opacity-10 dark:text-[#989CAA]  rounded-full">
                                                                {moment(task.date).format('ll')}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ) : ''
                            })}
                            {droppableProvided.placeholder}
                            {Object.keys(placeholderProps).length > 0 ? placeholderProps.source.droppableId === droppableId ? 
                            <div className='draggable-placeholder' style={{ position: 'absolute', top: `${placeholderProps.clientY}px`, height: `${placeholderProps.clientHeight}px`, width: `${placeholderProps.clientWidth}px`, borderRadius: '12px', flexShrink: '0', flexGrow: '0', pointerEvents: 'none', }}></div>
                            : '' : ''}
                            {droppableId === 'col-3' ? <div className={`mb-3 rounded-xl`}>
                                <div className="flex flex-col gap-2" >
                                    <div className="w-full h-[178px] border-2 border-dashed border-[#1C1D22] border-opacity-10 dark:border-white dark:border-opacity-10 p-4 rounded-xl flex items-center justify-center text-[#1C1D22] text-opacity-50 dark:text-white dark:text-opacity-50">
                                        Drag your task here...
                                    </div>
                                </div>
                            </div>: ''}

                        </div>

                    </div>

                </div>
            </>
            )}
        </Droppable>
    {modalEdit && <ModalEdit setTasks={setTasks} task={editTask} setModalEdit={setModalEdit}/>} 
    </>
  )
}

export default TaskList