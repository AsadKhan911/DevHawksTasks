import UserProfileNav from "../../components/userProfileNav"
import balanceUp from '../../assets/balanceup.png'
import LinearBarChart from '../../assets/LBchart.png'

const userProfile = () => {
    return (
        <div className='flex flex-row min-h-screen  bg-black bg-no-repeat bg-center bg-cover'>
            <UserProfileNav />

            <div className="flex flex-col">
                <h1 className="text-white font-semibold text-lg mt-10">Welcome back, Olivia</h1>

                <div>
                    {/* Balance Section */}
                    <div className="w-4xl h-full border mt-3 bg-gray-950 border-gray-600 font-semibold flex flex-col rounded-2xl">

                        <div className="flex justify-between">
                        <h1 className="p-5">Total Balance</h1>
                        <button className="bg-gray-950 m-5 p-2 border border-gray-600 rounded-lg">View report</button>
                        </div>
                       
                        <div className="flex flex-row">
                            <span className="p-5 -mt-7 text-2xl">$129,290.82</span>
                            <img src={balanceUp} className="h-6" />
                        </div>

                        <div className="flex flex-col items-center">
                            <img src={LinearBarChart} className="w-[95%]" />
                        </div>
                    </div>

                    {/* Transaction Section */}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default userProfile
