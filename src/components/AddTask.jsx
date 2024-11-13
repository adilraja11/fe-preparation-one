import React, { useState } from 'react'

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
  return (
    <>
        <div className='flex gap-2'>
            <input
                className='w-full bg-white text-black rounded-md px-2 py-1'
                placeholder='Add task'
                value={text}
                onChange={e => setText(e.target.value)} 
            />
            <button className='w-20 bg-amber-600 font-bold rounded-md' onClick={() => {
                setText('');
                onAddTask(text);
            }}
            >Add</button>
        </div>
    </>
  )
}
