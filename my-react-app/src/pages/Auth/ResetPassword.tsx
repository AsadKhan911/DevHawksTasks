import ellipse from '../../assets/bgellipse.png'
import Navbar from './Navbar'

import EmailLogo from '../../assets/email.png'
import {  useNavigate } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';


const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-black bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${ellipse})` }}>
      
      <Navbar />

      <div className="flex flex-col flex-grow items-center justify-center px-4 text-center">
        <div className="mb-4">
          <img src={EmailLogo} alt="" />
        </div>

        <h1 className="text-3xl font-semibold mb-2">Check your email</h1>
        <p className="text-gray-500">We sent a password reset link to</p>
        <p className='text-gray-500'>xyz@gmail.com</p>

        {/* Email input section */}
        <div className="w-full max-w-xs mt-4">
          <button
            className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-semibold shadow-inner"
            style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
            onClick={() => navigate('/login/forgot-password/reset-password/enter-code')}
          >
            Enter code manually
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-400 mt-4">
          <span>Didn’t receive the email?</span>
          <a href="#" onClick={() => navigate('forgot-password')} className="text-blue-500 sm:ml-2 mt-2 sm:mt-0">Click to resend</a>
        </div>

        <div className="flex items-center justify-center mt-4">
          <ArrowLeft className="text-gray-500 mr-2" />
          <button className="text-gray-500" onClick={() => navigate('/login')}>Back to login</button>
        </div>

      </div>
    </div>
  );
};


export default ResetPassword
