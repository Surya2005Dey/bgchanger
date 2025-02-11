import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("olive")

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"gray"}}  
          onClick={()=>setcolor("gray")}
          >Gray</button>
          <button onClick={()=>setcolor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}
          onClick={()=>setcolor("green")}
          >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}
          onClick={()=>setcolor("blue")}
          >blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-green-800 shadow-lg'
          style={{backgroundColor:"yellow"}}
          onClick={()=>setcolor("yellow")}
          >yellow</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"violet"}}
          onClick={()=>setcolor("violet")}
          >Violet</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"brown"}}
          onClick={()=>setcolor("brown")}
          >Brown</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}
          onClick={()=>setcolor("black")}
          >black</button>
          
        </div>
      </div>
    </div>
   
  )
}

export default App
