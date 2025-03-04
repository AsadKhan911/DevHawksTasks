import Navbar from "./Navbar";
import ellipse from '../../assets/bgellipse.png'
import personLogo from '../../assets/person.png'
import KeyLogo from '../../assets/key.png'
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StarterScreen = () => {
    const navigate = useNavigate()
    return (
        <div
            className="flex flex-col min-h-screen bg-black bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${ellipse})` }}
        >
            <Navbar />

            {/* Centering and Responsive Layout */}
            <div className="flex flex-col md:flex-row justify-center items-center flex-1 gap-5 px-5">
                {/* Box 1 */}
                <div className="w-[300px] h-[200px] border-[1.5px] border-gray-600 rounded-xl bg-black">
                    <div
                        className="w-[40px] h-[40px] m-5 bg-no-repeat bg-center bg-cover rounded-xl"
                        style={{ backgroundImage: `url(${personLogo})` }}
                    ></div>
                    <div className="p-5 -mt-6">
                        <p className="font-bold">Creator</p>
                        <p className="text-gray-400">I want to continue advertise</p>
                    </div>
                    <button className="p-5 -mt-2 font-semibold flex items-center gap-2"
                        onClick={() => navigate('/login')}>
                        <p className="text-gray-400">Continue</p>
                        <ArrowRight className="text-gray-400" />
                    </button>
                </div>

                {/* Box 2 */}
                <div className="w-[300px] h-[200px] border-[1.5px] border-gray-600 rounded-xl bg-black">
                    <div
                        className="w-[40px] h-[40px] m-5 bg-no-repeat bg-center bg-cover rounded-xl"
                        style={{ backgroundImage: `url(${KeyLogo})` }}
                    ></div>
                    <div className="p-5 -mt-6">
                        <p className="font-bold">Admin</p>
                        <p className="text-gray-400">I want to regulate advertise</p>
                    </div>
                    <button className="p-5 -mt-2 font-semibold flex items-center gap-2"
                        onClick={() => navigate('/login')}>
                        <p className="text-gray-400">Continue</p>
                        <ArrowRight className="text-gray-400" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StarterScreen
