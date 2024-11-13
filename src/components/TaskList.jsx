import React from 'react'
import { useState } from 'react';

export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
  return (
    <ul className='flex flex-col gap-1'>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  )
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            className='w-1/2 bg-white text-black rounded-md px-2 py-1 mx-2'
            value={task.text}
            onChange={e => {
              onChange({
                ...task,
                text: e.target.value
              });
            }} />
          <button className='w-20 bg-blue-600 px-2 py-1 font-bold rounded-md mr-2'  onClick={() => setIsEditing(false)}>
            Save
          </button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button className='w-20 bg-yellow-600 px-2 py-1 font-bold rounded-md mx-2' onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        {taskContent}
        <button className='w-20 bg-red-600 px-2 py-1 font-bold rounded-md' onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </label>
    );
  }
