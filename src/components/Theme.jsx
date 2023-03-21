import React ,{useState} from 'react'
import { changeColor } from '../features/Theme'
import { useDispatch } from 'react-redux'
function Theme() {
  const dispatch =useDispatch()
  const[color , setColor]=useState("")
  return (
    <div className='flex gap-2 pt-4'>
      <input type="text" onChange={(event)=> setColor(event.target.value)} className="border-2"/>
      <button onClick={()=>dispatch(changeColor(color))} className='border-2'> change color</button>
    </div>
  )
}

export default Theme
