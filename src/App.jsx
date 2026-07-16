import React, { useEffect, useState } from 'react'
import Tasklist from './component/Tasklist'

export default function App() {
  const[task,settask]=useState(()=>{
    const savetask = localStorage.getItem('my-task')
    return savetask? JSON.parse(savetask):[]
  })
  useEffect(()=>{
    localStorage.setItem('my-task',JSON.stringify(task))
  },[task])
  const[inputvalue,setinputvalue]=useState('')
  const handelAddTask=(e)=>{
   e.preventDefault()
   console.log(inputvalue)
  let inputcheck = inputvalue.trim()
     console.log(inputcheck)

  if(inputcheck===''){
    return 
  }
  
   let newtask={
     id:Date.now(),
     text:inputcheck,
     completed:false

   }
   
   settask([...task,newtask])
   setinputvalue('')
   console.log(task)
  }
  const ondeletetask=(id)=>{
   const update = task.filter((item)=>{
   return item.id!=id
   })
   settask(update)

  }
  const ontoggletask=(id)=>{
    const updataes = task.map((item)=>{
    if(item.id===id){
      return {...item,completed:!item.completed}
    }
        return item

    })
    settask(updataes)

  }
  return (
    <div className='  h-screen w-full bg-gray-200'>
      <div className=' rounded-xl absolute  left-1/3 mt-10 -transition-y-1/2 -transition-x-1/2 w-100 pb-13 bg-gray-50 shadow-2xl'>
      <h1 className='font-bold text-xl pl-5 pt-5'>My Day</h1>
      <h3 className='text-gray-400 pl-5'>Stay organized and get things done</h3>
      <form onSubmit={handelAddTask}  >
        <input  className=' ml-5  mt-5 border-2 border-blue-500 hover:border-blue-700 outline-0  rounded-lg h-11.5 w-71 p-2  'onChange={(e)=>setinputvalue(e.target.value)} value={inputvalue}  type="text" placeholder='Add new task... '  />
        <button type='submit' className='active:scale-95  hover:bg-blue-800 bg-blue-500 text-white rounded-lg m-5 px-3 py-1.5 h-11.5'>Add</button>
      </form>
      <div className='ml-5 mt-7  '>
      {task.length>0? task.map((taskitem)=>{return <Tasklist key={taskitem.id} task={taskitem} ontoggle={ontoggletask} ondelete={ondeletetask}/>}):<span className='w-full h-full flex items-center justify-center text-center  text-gray-400 '>No task for today. Add one above!!!</span>}
      </div>
        
      </div>
    </div>
  )
}



  