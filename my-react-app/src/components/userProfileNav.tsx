import Logo from '../assets/Frame.png'
import searchIcon from '../assets/search.png'
import dashboardIcon from '../assets/dashboard.png'
import adcampaign from '../assets/adcampaign.png'
import company from '../assets/company.png'

const userProfileNav = () => {
    return (
        <div className='flex flex-col min-h-screen w-[20%] bg-black bg-no-repeat bg-center bg-cover'>
            <div>

                <img src={Logo} className='m-5' />
                <div className="relative">
                    {/* Image positioned inside the input field */}
                    <img
                        src={searchIcon}
                        alt="Search"
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    />

                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 px-4 py-2 rounded-md border-[1.5px] m-2 border-gray-600 text-white placeholder-gray-400 outline-none bg-black"
                    />
                </div>

                <div className='flex flex-row ml-2 mt-4'>
                    <img src={dashboardIcon} />
                    <h3 className='ml-2 font-semibold text-gray-500'>Dashboard</h3>
                </div>

                <div className='flex flex-row ml-2 mt-4'>
                    <img src={adcampaign} />
                    <h3 className='ml-2 font-semibold text-gray-500'>Ad Campaign</h3>
                </div>

                <div className='flex flex-row ml-2 mt-4'>
                    <img src={company} />
                    <h3 className='ml-2 font-semibold text-gray-500'>Company</h3>
                </div>
            </div>
        </div>
    )
}

export default userProfileNav
