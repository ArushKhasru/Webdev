"use client"
import React from 'react'
import { useState } from "react"

export default function Navbar() {
    const [first, setfirst] = useState(0);
  return (
    <div>
        I am the Navbar
        {first}
      <button onClick={()=>setfirst(first+1)}> click me</button>
      
    </div>
  )
}
