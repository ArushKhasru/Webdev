"use client"
import React from 'react'


export default function page() {
  const handleClick = async () => {
    let data = {
      name :"Kaks",
      role:"coder",
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json();
    console.log(res);
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

    </div>
  )
}
