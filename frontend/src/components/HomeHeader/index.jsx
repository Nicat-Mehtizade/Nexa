import nexaLogo from "../../assets/Nexa-logo.png"
const HomeHeader = () => {
  return (
    <div className="border-gray-900 border-b">
        <div className="mx-auto max-w-7xl py-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-11" src={nexaLogo} alt="Nexa Logo" />
                    <h1 className="text-white font-medium text-xl">Nexa</h1>
                </div>
                <div className="flex items-center gap-5">
                    <button className="text-gray-400 cursor-pointer font-medium">Log in</button>
                    <button className="text-white bg-[#5434BF] py-2 px-5 rounded-[10px] cursor-pointer font-medium">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeader