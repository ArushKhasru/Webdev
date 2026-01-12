 "use server"
 import fs from "fs/promises"
 export const submitAction = async (e)=>{
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("Kaks.txt", `Name is ${e.get("name")} and the address is ${e.get("add")}`)
    console.log(a)
  }