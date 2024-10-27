import Lottie from "react-lottie"
import { animationDefaultOptions } from "@/lib/utils"

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 md:bg-[#161d25] md:flex flex-col justify-center items-center duration-1000 transition-all ">
      <Lottie
      isClickToPauseDisabled={true}
      height={200}
      width={200}
      options={animationDefaultOptions}/>

      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center nt-10 lg:text-4xl transition-all duration-300 text-center  ">
        <h3 className="poppins-medium ">
          Hi <span className="text-orange-500">! </span>Welcome to <span className="text-orange-500">Mugiwara </span>Chat App <span className="text-orange-500"></span>
        </h3>
      </div>
    </div>
  )
}

export default EmptyChatContainer
