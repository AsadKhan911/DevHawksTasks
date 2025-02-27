import {  useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Inventory = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-[#0a0a1a] text-white font-sans min-h-screen p-5">
     
     <Navbar />

     <main className="flex flex-col md:flex-row justify-center items-center w-full">
  {/* First Box */}
  <div className="flex-1 bg-[#0a0a1a] p-5 flex justify-center items-center text-[#a0a0a0] w-full">
    <div className="bg-[#1a1a2e] w-full max-w-[400px] h-80 rounded-2xl flex items-center justify-center text-sm border-2 border-gray-600">
      <p className="text-center">Player looking at a billboard and a +1</p>
    </div>
  </div>

  {/* Second Box */}
  <div className="flex-1 bg-[#0a0a1a] p-5 flex justify-center items-center text-[#a0a0a0] w-full">
    <div className="bg-[#1a1a2e] w-full max-w-[400px] h-80 rounded-2xl flex items-center justify-center text-sm border-2 border-gray-600">
      <p className="text-center">Heat Map</p>
    </div>
  </div>

  {/* Third Box */}
  <div className="flex-1 bg-[#0a0a1a] p-5 w-full">
    <div className="bg-[#1a1a2e] w-full max-w-[400px] h-80 rounded-2xl flex flex-col justify-center text-sm p-5 border-2 border-gray-600">
      <h2 className="text-xl font-semibold mb-3">With our proprietary FOV-tracking SDK, we:</h2>
      <ul className="space-y-2">
        <li className="bg-[#2a2a3e] p-4 text-lg rounded-lg flex items-center gap-2">
          📏 Track distance and duration of ad impressions
        </li>
        <li className="bg-[#2a2a3e] p-4 text-lg rounded-lg flex items-center gap-2">
          ✅ Deliver the most premium ad placements guaranteed
        </li>
      </ul>
    </div>
  </div>
</main>





<section className="mt-5 mb-10">
  <h2 className="text-lg mb-5 font-bold">Select a game to continue:</h2>

  <div className="flex gap-5 overflow-x-auto px-2 scrollbar-hide"> {/* Add 'scrollbar-hide' class */}
    {[
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A1CxycaDqb2Iez5j1ir170I0OcSG2nMbgw&s", title: "COMBAT", impressions: "1.5B - 25B+", color: 'bg-red-500', details: "Crazy Red Vs Blue\nGenre: Combat\nTop 5 Highest-Traffic Game\nPlays: 40M - 55M / month\nImpressions / placement: 1.5B - 2.5B / month\nAssumed Demographic: 12-18 y/o" },
      { img: "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/2/e/7/2e7798cddbdbc774139adbbbbbfc543ac8625f34.jpeg", title: "CASUAL", impressions: "300M - 5B+", color: 'bg-blue-500', details: "Brainrot Boxfights\nGenre: Casual\nTop 10 Most Played Game" },
      { img: "https://pics.craiyon.com/2023-09-10/32d75396983643a99646e4b581103615.webp", title: "COMBAT", impressions: "300M - 6B+", color: 'bg-red-500', details: "Battle Arena\nGenre: Combat\nExtreme Competitive Mode" },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9qPftgiNYhpQMEXOTysLLS-7RcxKbJb2pFoEF0gEeUdrucw-kdhIVXXzydi_foYNrPk&usqp=CAU", title: "TYCOON", impressions: "300M - 6B+", color: 'bg-green-500', details: "Millionaire Tycoon\nGenre: Tycoon\nBuild & Grow Your Empire" },
    ].map((game, index) => (
      <div 
      onClick={()=>navigate('/game')}
        key={index} 
        className="group min-w-[90%] sm:min-w-[350px] md:min-w-[300px] lg:min-w-[350px] h-[200px] bg-[#1a1a2e] rounded-lg overflow-hidden relative cursor-pointer hover:scale-105 transition-transform"
      >
        {/* Game Image */}
        <img src={game.img} alt={game.title} className="w-full h-full object-cover" />

        {/* Category Button */}
        <div className="absolute top-2 left-2">
          <button className={`px-4 py-2 rounded text-white ${game.color}`}>
            {game.title}
          </button>
        </div>

        {/* Impressions Text */}
        <div className="absolute bottom-2 left-2 text-white font-bold p-2 rounded">
          <p className="text-sm">Monthly Impressions: {game.impressions}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-sm whitespace-pre-line">{game.details}</p>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Inventory;