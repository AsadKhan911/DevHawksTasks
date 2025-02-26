import { useState } from "react";
import { LayoutDashboard, Megaphone, Building, Menu, X } from "lucide-react";
import logo from '../assets/Frame.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1300px] mx-auto flex justify-between items-center border-b border-[#333] py-4 px-6">
      {/* Logo */}
      <img src={logo} alt="Your Alt Text" />

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#a0a0a0] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Navigation */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#111] md:bg-transparent p-5 md:p-0 gap-4 md:gap-8 items-center md:items-center transition-all duration-300`}
      >
        <div className="flex items-center gap-x-2">
          <LayoutDashboard className="w-6 h-6 text-[#a0a0a0]" />
          <a href="/dashboard" className="text-[#a0a0a0] hover:text-white text-sm">Dashboard</a>
        </div>

        <div className="flex items-center gap-x-2">
          <Megaphone className="w-6 h-6 text-[#a0a0a0]" />
          <a href="/cart" className="text-[#a0a0a0] hover:text-white text-sm">Ad Campaign</a>
        </div>

        <div className="flex items-center gap-x-2">
          <Building className="w-6 h-6 text-[#a0a0a0]" />
          <a href="#" className="text-[#a0a0a0] hover:text-white text-sm">Company</a>
        </div>
      </nav>

      {/* User Profile */}
      <div className="hidden md:flex gap-3 items-center">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#ff4444] rounded-full flex items-center justify-center text-sm md:text-xs text-white">
          PR
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-sm md:text-base">Olivia Rhyne</span>
          <span className="text-xs md:text-sm text-gray-400">olivia@prime.com</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
