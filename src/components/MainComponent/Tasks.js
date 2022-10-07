import React, { useContext, useEffect, useState } from 'react'

import TaskList from './TaskComponent/TaskList'

import Menu from '../global/Menu'

import ModalCreate from './TaskComponent/ModalCreate'

import { DragDropContext } from 'react-beautiful-dnd'

import { TaskContext } from '../../contexts/TaskContext'


const Tasks = () => {
    const [modalCreate, setModalCreate] = useState(false)
    const { tasks, setTasks } = useContext(TaskContext)

    const [providerProps, setProviderProps] = useState({})
    const queryAttr = 'data-rbd-drag-handle-draggable-id'

    const getDraggedDOM = (draggableId) => {
      const domQuery = `[${queryAttr}='${draggableId}']`
      const draggedDOM = document.querySelector(domQuery)
      return draggedDOM
    }

    // reorder column List
    const reorderColumnList = (tasks, startIndex, endIndex) => {
      const newTasks = Array.from(tasks)
      const [remove] = newTasks.splice(startIndex, 1)
      newTasks.splice(endIndex, 0, remove)
      return newTasks
    }

    // drag end 
    const onDragEnd = (result) => {
      const {draggableId, destination, source} = result
      // If user tries to drop in an unknow destination
      if(!destination) return;

      // if the user drags and drops back in the same position
      if(destination.droppableId === source.draggableId && destination.index === source.index) return;

      // edit position task after drag in state
      let tasksf = tasks.map((task, index) => {
        if(source.index === index){
          if(destination.droppableId === 'col-1'){
            task.status = 'todo'
          }else if(destination.droppableId === 'col-2'){
            task.status = 'in-progress'
          }else if(destination.droppableId === 'col-3'){
            task.status = 'todo-done'
            task.percentage_task = 10
          }
        }
        return task
      })
      // call reorderColumnList function to arrange tasks
      const newTasks = reorderColumnList(tasks, source.index, destination.index)

      // Set tasks on state
      setTasks(tasksf)
      setTasks(newTasks)
      setProviderProps({})
    }

    const onDragStart = (result) => {
      const { source, destination, draggableId } = result;
      const draggedDOM = getDraggedDOM(draggableId)

      if(!draggedDOM) return;
      const {clientHeight, clientWidth} = draggedDOM
      const sourceIndex = source.index
      if(!draggedDOM.parentNode) return;

      let clientY = 0;
      [...draggedDOM.parentNode.children].slice(0, draggedDOM.parentNode.children.length).map(child => {
        if(child.getAttribute('data-rbd-drag-handle-draggable-id') === draggableId){
          console.log(child.offsetTop);
          clientY =  parseFloat(child.offsetTop)
        }
      })
      console.log(clientY);
      setProviderProps({
        clientHeight,
        clientWidth,
        clientY,
        source
      })
    }


    return (
      <div className='p-3'>
        <Menu modalCreate={modalCreate} setModalCreate={setModalCreate}/>
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
              <TaskList placeholderProps={providerProps} droppableId='col-1' name="To do" status='todo' data={tasks} setTasks={setTasks}/>
              <TaskList placeholderProps={providerProps} droppableId='col-2' name="In progress" status='in-progress' data={tasks} setTasks={setTasks}/>
              <TaskList placeholderProps={providerProps} droppableId='col-3' name="Done" status='todo-done' data={tasks} setTasks={setTasks}/>
          </div>
          { modalCreate && <ModalCreate setModalCreate={setModalCreate} />} 
        </DragDropContext>
      </div>
    )
}

export default Tasks