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
    <div className={`flex px-4 py-2 m-3 rounded-md justify-between bg-${x.color} ${x.color === 'reaction' ? 'bg-reaction' : ''} ${x.color === 'memory' ? 'bg-memory' : ''} ${x.color === 'verbal' ? 'bg-verbal' : ''}
    ${x.color === 'visual' ? 'bg-visual' : ''} bg-opacity-5`}>
      <div className="flex gap-2">
        <img src={x.icon} alt="icon" />
            <p className={`font-semibold text-${x.color} ${x.color === 'reaction' ? 'text-reaction' : ''} ${x.color === 'memory' ? 'text-memory' : ''} ${x.color === 'verbal' ? 'text-verbal' : ''} ${x.color === 'visual' ? 'text-visual' : ''} ml-2`}>{x.category}</p>
      </div>
      <div>
        <p className="font-bold mr-2 text-gray-400"><span className="font-bold mr-2 text-gray-700">{x.score}</span> / 100</p>
      </div>
    </div>
  )
})

  return (
    <>
    <div className="lg:max-2xl:flex lg:max-2xl:items-center lg:justify-center lg:max-2xl:h-screen lg:max-2xl:w-screen xs:max-md:h-screen xs:max-md:w-screen xs:max-md:-mt-4">
      <div className="lg:max-2xl:flex lg:max-2xl:w-1/2 lg:max-2xl:h-1/2" >
        <div className="bg-gradient-to-b from-primary to-primary1 h-full w-1/2 lg:max-2xl:rounded-2xl text-center text-white font-hanken xs:max-md:w-full xs:max-md:rounded-b-2xl">
          <h3 className="my-4 text-gray-200 font-medium text-lg ">Your Result</h3>
          <div className="bg-gradient-to-b from-circle to-circle2 lg:max-2xl:rounded-full lg:max-2xl:w-1/2 lg:max-2xl:h-1/2 m-auto pt-12">
            <span className=" text-6xl font-extrabold">{total}</span><br /><span className="font-medium text-gray-300 text-sm">of 100</span>
          </div>
          <h3 className="text-2xl font-medium">Great</h3>
          <p className="font-medium text-gray-300 text-sm">You scored higher than 65% of<br /> people who have taken<br /> these tests</p>
        </div>
          <div className="lg:max-2xl:h-full lg:max-2xl:w-1/2 lg:max-2xl:rounded-x-2xl shadow-2xl p-4">
            <h3 className="text-lg text-left font-medium ml-3 mb-3">Summary</h3> 
            {summary}
            <div className="flex items-center justify-center">
            <button className="bg-sec hover:bg-visual px-28 py-3 text-white rounded-3xl mt-2">Continue</button>
            </div>
          </div>  
      </div>
    </div>
    
    </>
  )
}

export default App
