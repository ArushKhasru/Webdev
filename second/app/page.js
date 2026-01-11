
import fs from "fs/promises"
import Navbar from "@/components/Navbar";
export default function page() {
  console.log("I am Kaks");
  let a = fs.readFile(".gitignore");
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      
      I am the component
      <Navbar />
      
    </div>
  )
}
