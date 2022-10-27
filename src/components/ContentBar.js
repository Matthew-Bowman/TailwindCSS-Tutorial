import { FaPencilAlt, FaHashtag } from "react-icons/fa"
import TopBar from "./TopBar"

const ContentBar = () => {
    return (
        <div className="fixed left-16
                        flex flex-col
                        h-screen w-64
                        m-0 p-0
                        select-none
                        bg-gray-800 text-white
                        overflow-y-scroll scrollbar-none">
            <TopBar bg="800" ug="900" heading="Cool Server"/>
            <div className="px-2 w-full">
                {/* <h2 className="ml-2 mt-8 mb-4 text-xl">Channels</h2> */}
                <div className="h-fit mt-2
                                flex flex-col">
                    <Channel text="General" />
                    <Channel text="Really-Long-General-Chat" />
                </div>
            </div>
        </div>
    );
};

const Channel = ({ text }) => (
    <div className="w-full px-4 py-1
                    inline-flex items-center
                    text-gray-400
                    hover:bg-gray-700 hover:cursor-pointer rounded-l
                    transition-all duration-100 ease-linear
                    font-mono
                    group">
        <FaHashtag />
        <p className="ml-1 truncate">{text}</p>
        <FaPencilAlt className="ml-2 text-base 
                          scale-0 group-hover:scale-100
                          text-gray-500 hover:text-green-500
                          transition-all duration-100 ease-linear"/>
    </div>
);

export default ContentBar;