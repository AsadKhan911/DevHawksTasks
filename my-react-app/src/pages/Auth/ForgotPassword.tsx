import Navbar from "./Navbar"
import ellipse from '../../assets/bgellipse.png'
import KeyLogo from '../../assets/key.png'
import { ArrowLeft } from "lucide-react";
import {  useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const navigate = useNavigate();
  
    return (
      <div className="flex flex-col min-h-screen bg-black"
        style={{ backgroundImage: `url(${ellipse})` }}>
        
        <Navbar />
  
        <div className="flex flex-col flex-grow items-center justify-center px-4 text-center">
          <div className="mb-4">
            <img src={KeyLogo} alt="" />
          </div>
  
          <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
          <p className="text-gray-500">No worries, we will send you reset instructions.</p>
  
          {/* Email input section */}
          <div className="w-full max-w-xs mt-4">
            <h2 className="text-gray-400 mb-2 text-left">Email</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
                required
              />
  
              <button
                className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-bold shadow-inner"
                style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
                onClick={() => navigate('/login/forgot-password/reset-password')}
              >
                Reset password
              </button>
            </form>
          </div>
  
          {/* Back to Login */}
          <div className="flex items-center justify-center mt-4">
            <ArrowLeft className="text-gray-500 mr-2" />
            <button className="text-gray-500" onClick={() => navigate('/login')}>Back to login</button>
          </div>
        </div>
      </div>
    );
  };
  

export default ForgotPassword
