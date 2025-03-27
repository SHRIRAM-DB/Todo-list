import React, { useState } from 'react'

function AddTask({tasklist,setTasklist, task, setTask}) {

    const [count, setCount] = useState(1);

    function handleSubmit(e){

        e.preventDefault();

        setCount(() => (count+1))

        if(Object.keys(task).length !== 0){
            if(task.id){
                const date = new Date();
                const updatedTaskList = tasklist.map((todo) => (
                    todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo
                ))
                setTasklist(updatedTaskList)
                setTask({})
            }
            else{
                const date = new Date();
                const newTask = {
                    id: count,
                    name: task.name,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                }
        
                setTasklist([...tasklist,newTask])
                setTask({})
            }
        }
        else{
            alert("Please enter the valid task")
        }

    }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={task.name || ''} autoComplete='off' placeholder='add task' maxLength='25' onChange={(e) => setTask({...task, name: e.target.value})}/>
            <button type='submit'>{task.id ? "Update" : "Add" }</button>
        </form>
    </section>
  )
}

export default AddTask
