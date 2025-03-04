import { ArrowLeft } from 'lucide-react'
import ellipse from '../../assets/bgellipse.png'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import LockLogo from '../../assets/lock.png'

const EnterResetPassword = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col min-h-screen bg-black bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${ellipse})` }}>

            <Navbar />

            <div className="flex flex-col flex-grow items-center justify-center px-4 text-center">
                <div className="mb-4">
                    <img src={LockLogo} alt="" />
                </div>

                <h1 className="text-3xl font-semibold mb-2">Set new password</h1>
                <p className="text-gray-500">You new password must be different to</p>
                <p className='text-gray-500'>prevviously used passwords</p>

                <form className="space-y-4 w-full max-w-md mt-6">
                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-[70%] px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="Enter confirm password"
                            className="w-[70%] px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
                            required
                        />
                    </div>

                    <h3 className="text-sm">Must be at least 6 characters</h3>
                </form>


                {/* Email input section */}
                <div className="w-full max-w-xs mt-4">
                    <button
                        className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-semibold shadow-inner"
                        style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
                        onClick={() => navigate('/login/forgot-password/reset-password/enter-code/enter-password/success')}
                    >
                        Reset password
                    </button>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <ArrowLeft className="text-gray-500 mr-2" />
                    <button className="text-gray-500" onClick={() => navigate('/login')}>Back to login</button>
                </div>

            </div>
        </div>
    )
}

export default EnterResetPassword
