// “Fetching data from an API and rendering it in React.”
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

function App() {
  const api = "https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(api);
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {

    fetchData();

  }, []);
  const Data = ({ item }) => {
    return (
      <>
        <div className="container flex w-120 border border-amber-400 mt-10 ">
          <div className="data  ">{item.id}, {item.title}</div>


        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      {data.map(item => (
        <Data key={item.id} item={item} />
      ))}

    </>
  )
}

export default App
