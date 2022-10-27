import TopBar from "./TopBar"

const Main = () => {
    return (
        <div className="fixed left-80
                        flex flex-col
                        h-screen
                        right-0
                        flex-grow flex-shrink-0
                        bg-gray-700">
            {/* Heading */}
            <TopBar bg="700" ug="800" heading="General" />
            {/* Message Container */}
            <div className="overflow-y-scroll scrollbar-none h-full">
                <Message avatar="https://picsum.photos/48?random=1" author="Matthew" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est. Aenean pharetra magna ac placerat vestibulum lectus mauris. Amet nisl suscipit adipiscing bibendum." />
                <Message avatar="https://picsum.photos/48?random=2" author="James" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum sed arcu non odio euismod lacinia at quis. Amet nisl suscipit adipiscing bibendum est. Mauris vitae ultricies leo integer malesuada nunc vel." />
            </div>
            {/* Where Users Type Their Message */}
            <MessageBar />
        </div>
    );
}

const MessageBar = () => {
    return (
        <form className="h-auto
                        flex align-middle justify-center
                        bg-gray-700" id="message-form">
            <input  className="h-12 w-full
                               px-2 m-3 
                               rounded-lg 
                               focus:outline-none 
                               bg-gray-600 text-gray-100" id="message-content" type="text" placeholder="Enter your message..."/>
        </form>
    );
}

const Message = ({avatar, author, text}) => {
    return (
        <div className="p-4 w-5/6 flex flex-row">
            <img className="rounded-full h-12 w-12 mr-4" src={`${avatar}`} width="48" height="48" />
            <div className="">
                <h3 className="font-semibold text-base text-gray-200">{author}</h3>
                <p className="text-sm text-gray-400 break-all">{text}</p>
            </div>
        </div>
    );
};

export default Main;