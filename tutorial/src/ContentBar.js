import { FaPencilAlt, FaHashtag } from "react-icons/fa"

const ContentBar = () => {
    return (
        <div className="fixed top-0 left-16
                        h-screen w-64
                        m-0 px-2
                        select-none
                        bg-gray-800 text-white
                        overflow-y-scroll scrollbar-none">

            <div className="">
                <h2 className="ml-2 mt-8 mb-4 text-xl">Channels</h2>
                <div className="flex flex-col h-fit">
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