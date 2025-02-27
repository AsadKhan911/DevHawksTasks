import Navbar from '../components/Navbar';
import groupImage from '../assets/group.png';
import Framer from "../assets/Frame.png";
import { useNavigate } from 'react-router-dom';

const InGameVisualizer2 = () => {

    const navigate = useNavigate()
    const adSlots = [
        {
            title: "Central-Arena",
            impressions: "1B - 2.5B",
            distanceSplit: { close: "23%", medium: "40%", far: "27%" },
            supportedAds: "2D Still, 2D Animated, 3D Hologram",
        },
        {
            title: "The Vault",
            impressions: "1B - 2.5B",
            distanceSplit: { close: "23%", medium: "40%", far: "27%" },
            supportedAds: "2D Still, 2D Animated, 3D Hologram",
        },
        {
            title: "Arena Wall",
            impressions: "1B - 2.5B",
            distanceSplit: { close: "23%", medium: "40%", far: "27%" },
            supportedAds: "2D Still, 2D Animated, 3D Hologram",
        },
    ];

    return (
        <div className='bg-[#0a0a1a] text-white font-sans p-5'>
            <Navbar />
            <div
                className="flex flex-col lg:flex-row gap-6 text-white p-6 rounded-xl w-full mx-auto bg-cover"
                style={{
                    backgroundImage: `url(${groupImage})`, //url('../src/assets/group.png')
                    backgroundSize: "cover",
                    backgroundPosition: " calc(300px) center",
                    width: "100vw",
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 text-white p-6 rounded-xl w-full max-w-5xl mx-auto">
                    {/* Ad Slots (Left Side) */}
                    <div className="p-4 rounded-xl bg-gray-900 w-full max-w-sm lg:max-w-xs overflow-hidden mt-4 lg:mt-0 lg:-ml-36">
                        <h3 className="text-lg font-bold mb-4">Select ad slot on the map:</h3>
                        <div className="space-y-3">
                            {adSlots.map((slot, index) => (
                                <div key={index} className="p-4 bg-gray-800 rounded-lg cursor-pointer border border-transparent hover:border-blue-400 transition">
                                    <h4 className="text-lg font-semibold">{slot.title}</h4>
                                    <div className='flex justify-between'>
                                        <p className="text-gray-400 text-sm">Monthly Impressions:</p>
                                        <p className='text-green-400'>{slot.impressions}</p>
                                    </div>
                                    <hr className='mt-2 mb-2 border-gray-500' />
                                    <div className='grid grid-cols-3 gap-2 text-sm'>
                                        <p>Close: <span className='font-bold'>{slot.distanceSplit.close}</span></p>
                                        <p>Medium: <span className='text-green-400 font-bold'>{slot.distanceSplit.medium}</span></p>
                                        <p>Far: <span className='font-bold'>{slot.distanceSplit.far}</span></p>
                                    </div>
                                    <hr className='mt-2 mb-2 border-gray-500' />
                                    <p className="text-xs mt-2 text-white font-bold">Supported Ads: {slot.supportedAds}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ad Summary (Bottom Right) */}
                    <div className="bg-gray-900 p-4 rounded-xl w-full max-w-sm lg:max-h-90 flex flex-col mt-4 lg:mt-24 lg:-mr-32">
                        <div className='bg-gray-800 p-4 rounded-xl'>
                            <div className='flex justify-between'>
                                <h3 className="text-lg font-bold">AI Summary:</h3>

                                <img src={Framer} alt="Framer" style={{ width: "40px", height: "auto" }} />

                            </div>
                            <hr className='mt-4 border-gray-700' />
                            <p className="text-sm text-white mt-2 font-semibold">This ad creative looks perfect!</p>
                            <div className="mt-4 flex justify-between">
                                <p className="text-lg font-semibold text-white">FOV Score:</p>
                                <p className='text-lg font-semibold text-green-400'>100%</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm">Monthly Impressions:</p>
                            <input type="range" className="w-full mt-2" min="0" max="100" defaultValue="100" />
                            <p className="text-sm mt-2">~ 2.5B Impressions / mo</p>
                        </div>
                        <button 
                        onClick={()=>navigate('/campaigns')}
                        className="bg-blue-500 text-white mt-6 p-3 rounded-lg hover:bg-blue-600 transition">
                            Add To Campaign
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InGameVisualizer2;
