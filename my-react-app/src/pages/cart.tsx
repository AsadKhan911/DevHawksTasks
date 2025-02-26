import { ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';
import groupImage from '../assets/group.png';

const Cart = () => {
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
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 text-white p-6 rounded-xl w-full max-w-5xl mx-auto items-start">

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

                    <div className="absolute top-23 right-4 flex items-center gap-3 bg-gray-900 text-white p-4 rounded-xl shadow-lg max-w-sm">
                        <ShoppingCart className="w-6 h-6 text-white" />
                        <p className="text-gray-300 font-medium">Campaign:</p>
                        <p className="text-white font-bold">3 Items</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Cart;
