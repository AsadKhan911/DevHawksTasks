import Navbar from '../components/Navbar';
import groupImage from '../assets/group.png';

const Cart2 = () => {
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
        <div className='bg-[#0a0a1a] text-white font-sans'>
            <Navbar />
            <div
                className="flex flex-col lg:flex-row gap-6 justify-between text-white p-6 rounded-xl w-full mx-auto bg-cover"
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
                                        <p className='text-[#42E34A]'>{slot.impressions}</p>
                                    </div>

                                    <div className='grid grid-cols-3 gap-2 text-sm'>
                                        <p>Close: <span className='font-bold'>{slot.distanceSplit.close}</span></p>
                                        <p>Medium: <span className='text-[#42E34A] font-bold'>{slot.distanceSplit.medium}</span></p>
                                        <p>Far: <span className='font-bold'>{slot.distanceSplit.far}</span></p>
                                    </div>
                                    <hr className='mt-2 mb-2 border-gray-500' />
                                    <p className="text-xs mt-2 text-white font-bold">Supported Ads: {slot.supportedAds}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr />
                    <div className="flex flex-col items-center justify-between bg-gray-900 p-4 rounded-lg">
                        {/* Left Section - Campaign List */}
                        <div className="p-3 rounded-lg bg-gray-900 w-full max-w-sm overflow-hidden">
                            <h3 className="text-base font-bold mb-3">Your Campaign:</h3>
                            <div className="space-y-2">
                                {/* Campaign Items */}
                                {[
                                    { name: "Vault Wall 2", cpm: "$1.5 CPM", impressions: "2B-2.5B" },
                                    { name: "Inner Vault", cpm: "$2 CPM", impressions: "0.88B-1.2B" },
                                    { name: "Upper Grind Rails", cpm: "$1.8 CPM", impressions: "1.88B-2.2B" }
                                ].map((campaign, index) => (
                                    <div key={index} className="p-3 bg-gray-800 rounded-lg cursor-pointer border border-transparent hover:border-blue-400 transition">
                                        <div className="flex justify-between">
                                            <h4 className="text-sm font-semibold">{campaign.name}</h4>
                                            <p className="text-sm">{campaign.cpm}</p>
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-gray-400 text-sm">Expected Impressions/mo</p>
                                            <p className="text-[#42E34A] font-semibold text-sm">{campaign.impressions}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Section - Projected Results */}
                        <div className="bg-gray-900 p-3 w-full border-t border-gray-600 max-w-sm flex flex-col -mt-4">
                            <h3 className="text-base font-semibold">Projected Results:</h3>
                            {[
                                { label: "Duration:", value: "1 Month" },
                                { label: "Total Price:", value: "$7.8M-$10.1M" },
                                { label: "Expected Impressions /mo:", value: "4.6B-5.9B", highlight: true },
                                { label: "All Expected Performance", value: "89%", highlight: true }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between mt-2">
                                    <p className="text-gray-500 text-sm font-semibold">{item.label}</p>
                                    <p className={`font-bold ${item.highlight ? 'text-[#42E34A] text-base' : 'text-white text-xs'}`}>{item.value}</p>
                                </div>
                            ))}
                            <button className="relative bg-blue-500 shadow-inner font-semibold text-white mt-4 p-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center text-sm">
                                <span className="absolute inset-0 rounded-md border border-blue-300 opacity-60 pointer-events-none"></span>
                                <span className="relative">Integrate Now!</span>
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Cart2;
