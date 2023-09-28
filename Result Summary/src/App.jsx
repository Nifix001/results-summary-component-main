import React from "react"
import data from "../data.js"

function App() {

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i].score;

  }
  const average = sum / data.length;
  
  const total = Math.round(average)

const summary = data.map(x =>{
  return (
    <div className="flex px-4 py-4 justify-between">
      <div className="flex gap-2">
        <img src={x.icon} alt="icon" />
        <p>{x.category}</p>
      </div>
      <div>
        <p>{x.score} / 100</p>
      </div>
    </div>
  )
})

  return (
    <>
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex w-1/2 h-1/2">
        <div className="bg-blue-600 h-full w-1/2 rounded-2xl text-center">
          <h3>Your Result</h3>
          <div className="bg-blue-500 rounded-full w-1/2 h-1/2 m-auto">
            <span>{total}<br /> of 100</span>
          </div>
          <h3>Great</h3>
          <p>You scored higher than 65% of people who have taken these tests</p>
        </div>
          <div className="h-full w-1/2 rounded-e-2xl shadow-2xl">
            <h3 className="text-center">Summary</h3> 
            {summary}
            <div className="flex items-center justify-center">
            <button className="">Continue</button>
            </div>
          </div>  
      </div>
    </div>
    
    </>
  )
}

export default App
