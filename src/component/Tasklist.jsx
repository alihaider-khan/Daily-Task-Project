import React from 'react'

export default function texklist({task,ontoggle,ondelete}) {
  return (
    <div >
      <div className='flex justify-between items-center  rounded-xl border-2 border-solid border-white bg-white shadow-2xl p-3 mb-3 mr-3 '>
        <div className='flex text-center'>
        <input className='w-7 mt-1 h-5 cursor-pointer '   onChange={()=>{ontoggle(task.id)}} type="checkbox"  checked={task.completed} placeholder='hey i am text list' />
        <h1 className={`ml-3 ${task.completed? 'line-through text-gray-800':'text-black'}`}>{`${task.completed===true?`${task.text}->completed`:`${task.text}`}`}</h1>
      </div>
       <button onClick={()=>{ondelete(task.id)}} className='mr-3 active:scale-95 hover:bg-red-700 hover:text-white bg-red-100 text-red-700 px-5 py-1 rounded-2xl'>delete</button>    
    </div>
      </div>
     
  )


}
