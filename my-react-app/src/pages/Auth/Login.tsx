import { useState } from "react";
import ellipse from '../../assets/bgellipse.png'
import Navbar from "./Navbar";
import googleIcon from '../../assets/google.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-black bg-no-repeat bg-center bg-cover px-4"
      style={{ backgroundImage: `url(${ellipse})` }}
    >
      <Navbar />

      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-2">
          {isLogin ? "Log in to your account" : "Create an account"}
        </h2>
        <p className="text-gray-400 text-center mb-6">
          {isLogin ? "Welcome back! Please enter your details." : "Sign up to get started."}
        </p>

        {/* Toggle Login / Signup */}
        <div className="flex mb-6 border-[1.5px] border-gray-600 rounded-lg">
          <button
            className={`flex-1 py-2 rounded-md transition ${!isLogin ? "bg-gray-700 text-white" : "bg-gray-950 text-gray-400"}`}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
          <button
            className={`flex-1 py-2 rounded-md transition ${isLogin ? "bg-gray-700 text-white" : "bg-gray-950 text-gray-400"}`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {!isLogin && ( // Name field for Signup
            <>
              <h2 className="text-gray-400 mb-2">Name</h2>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
                required
              />
            </>
          )}

          <h2 className="text-gray-400 mb-2">Email</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
            required
          />

          <h2 className="text-gray-400 mb-2">Password</h2>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded-md bg-gray-950 border-[1.5px] border-gray-600 text-white placeholder-gray-400 outline-none"
            required
          />

          {!isLogin && <h3 className="text-gray-500 text-sm">Must be at least 6 characters</h3>}

          {/* Remember me & Forgot Password */}
          {isLogin && (
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember for 30 days
              </label>
              <a href="#" onClick={() => navigate('forgot-password')} className="text-blue-500">Forgot password?</a>
            </div>
          )}

          {/* Submit Button */}
          <button
            className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-bold shadow-inner"
            style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
          >
            {isLogin ? "Sign in" : "Get Started"}
          </button>
        </form>

        {/* Google Sign-in */}
        <div className="mt-4 text-center">
          <button className="border-[1.5px] border-gray-600 w-full py-2 bg-gray-950 flex items-center justify-center gap-2 rounded-md hover:bg-gray-800 font-semibold">
            <img src={googleIcon} alt="Google" className="w-6 h-6" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};



export default Login;