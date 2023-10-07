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
    <div className={`flex px-4 py-3 m-3 rounded-md justify-between bg-${x.color} ${x.color === 'reaction' ? 'bg-reaction' : ''} ${x.color === 'memory' ? 'bg-memory' : ''} ${x.color === 'verbal' ? 'bg-verbal' : ''}
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
    <main>
    <div className="lg:max-2xl:flex lg:max-2xl:items-center lg:justify-center lg:max-2xl:h-screen lg:max-2xl:w-screen xs:max-md:h-screen xs:max-md:w-screen xs:max-md:-mt-4">
      <div className="lg:max-2xl:flex lg:max-2xl:w-1/2 lg:max-2xl:h-3/5 xs:max-md:w-screen xs:max-md:h-full xs:max-md:grid " >
        <div className=" bg-gradient-to-b from-primary to-primary1 lg:max-2xl:h-full lg:max-2xl:w-1/2 lg:max-2xl:rounded-2xl xs:max-md:h-full xs:max-md:-mt-8 text-center text-white font-hanken xs:max-md:w-full xs:max-md:rounded-b-3xl xs:max-md:pb-12 flex flex-col justify-center items-center">
          <header>
          <h3 className=" text-gray-300 text-xl font-medium mt-12 ">Your Result</h3>
          </header>
          <div className="bg-gradient-to-b from-circle to-circle2 rounded-full w-1/3 xs:max-md:h-auto xs:max-md:w-1/3 h-fit grid items-center justify-center gap-0 m-auto p-6 mt-6">
            <span className=" text-6xl font-extrabold">{total}</span><br /><span className="font-medium text-gray-300 text-sm">of 100</span>
          </div>
          <h3 className="text-2xl mb-4 font-medium">Great</h3>
          <p className="mb-6 font-medium text-gray-300 text-lg">You scored higher than 65% of<br /> people who have taken<br /> these tests</p>
        </div>
          <div className="lg:max-2xl:h-full lg:max-2xl:w-1/2 lg:max-2xl:rounded-x-2xl shadow-2xl py-4 px-4">
            <h3 className="text-left text-xl font-medium my-8 ml-4 xs:max-md:-mt-8 xs:max-md:mb-0">Summary</h3> 
            {summary}
            <div className="flex items-center justify-center">
            <button className="bg-sec hover:bg-visual px-28 py-3 text-white rounded-3xl mt-8">Continue</button>
            </div>
          </div>  
      </div>
    </div>
    
    </main>
  )
}

export default App
