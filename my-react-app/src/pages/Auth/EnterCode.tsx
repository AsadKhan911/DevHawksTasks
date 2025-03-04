import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import EmailLogo from "../../assets/email.png";
import ellipse from "../../assets/bgellipse.png";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const EnterCode = () => {
    const [code, setCode] = useState<string[]>(["", "", "", ""]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return; // Allow only single digits
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    
        // Move to next input if a number is entered
        if (value && index < code.length - 1) {
            document.getElementById(`code-${index + 1}`)?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            document.getElementById(`code-${index - 1}`)?.focus();
        }
    };
    

    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col min-h-screen bg-black bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${ellipse})` }}
        >
            <Navbar />

            <div className="flex flex-col flex-grow items-center justify-center px-4 text-center">
                <div className="mb-4">
                    <img src={EmailLogo} alt="Email Icon" />
                </div>

                <h1 className="text-3xl font-semibold mb-2">Check your email</h1>
                <p className="text-gray-500">We sent a password reset code to</p>
                <p className="text-gray-500">xyz@gmail.com</p>

                {/* Code Input Fields */}
                <div className="flex justify-center space-x-3 mb-4 mt-4">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            id={`code-${index}`}
                            type="text"
                            value={digit}
                            maxLength={1} // TypeScript requires this to be a number
                            className="w-16 h-16 text-center text-3xl font-semibold text-blue-600 bg-gray-950 border-2 border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}

                </div>

                {/* Enter Code Manually Button */}
                <div className="w-full max-w-xs mt-4">
                    <button
                        className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition font-semibold shadow-inner"
                        style={{ boxShadow: "inset 0 0px 10px rgba(255, 255, 255, 0.4)" }}
                        onClick={() => navigate("/login/forgot-password/reset-password/enter-code/enter-password")}
                    >
                        Verify email 
                    </button>
                </div>

                {/* Resend Email */}
                <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-400 mt-4">
                    <span>Didn’t receive the email?</span>
                    <button
                        className="text-blue-500 sm:ml-2 mt-2 sm:mt-0"
                        onClick={() => navigate("/forgot-password")}
                    >
                        Click to resend
                    </button>
                </div>

                {/* Back to Login */}
                <div className="flex items-center justify-center mt-4">
                    <ArrowLeft className="text-gray-500 mr-2" />
                    <button className="text-gray-500" onClick={() => navigate("/login")}>
                        Back to login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnterCode;
