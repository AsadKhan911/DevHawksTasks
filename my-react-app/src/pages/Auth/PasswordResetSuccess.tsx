import { ArrowLeft } from "lucide-react"
import Navbar from "./Navbar"
import ellipse from '../../assets/bgellipse.png'
import { useNavigate } from "react-router-dom"
import successLogo from '../../assets/success.png'

const PasswordResetSuccess = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: `url(${ellipse})` }}>
    
    <Navbar />

    <div className="flex flex-col flex-grow items-center justify-center px-4 text-center">
      <div className="mb-4">
        <img src={successLogo} alt="" />
      </div>

      <h1 className="text-3xl font-semibold mb-2">Password reset successfully</h1>
      <p className="text-gray-500">Your password has been successfully reset.</p>
      <p className='text-gray-500'>Click below to login magically</p>

      {/* Email input section */}
      <div className="w-full max-w-xs mt-4">
        <button
          className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-semibold shadow-inner"
          style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
          onClick={() => navigate('/dashboard')}
        >
          Continue
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

export default PasswordResetSuccess
