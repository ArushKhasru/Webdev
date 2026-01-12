"use client"
import { submitAction } from '@/actions/page'
import { useRef } from 'react'

export default function Home() {
let ref = useRef();
  return (
    <div className='flex'>
        <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}}>
          <label htmlFor = "name">Name : </label>
          <input name ="name" type = "text" id = "name" ></input>
          <label htmlFor = "add">Address : </label>
          <input name ="add" type = "text" id = "add" ></input>
        <button>Submit</button>

        </form>
    </div>
  )
}
