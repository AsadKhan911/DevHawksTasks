import logo from '../../assets/Frame.png'

const Navbar = () => {

    return (
        <nav className="w-full max-w-[1300px] mx-auto flex justify-center items-center py-8 px-6">
            {/* Logo */}
            <img src={logo} alt="Your Alt Text" />
        </nav>

    );
};

export default Navbar;
