import TopBar from "./TopBar"

const Main = () => {
    return (
        <div className="fixed left-80
                        flex flex-col
                        h-screen
                        right-64
                        flex-grow flex-shrink-0
                        bg-gray-700">
            <TopBar bg="700" ug="800" heading="General" />
            <div className="overflow-y-scroll scrollbar-none h-full mb-16">
                <Message avatar="https://picsum.photos/48?random=1" author="Matthew." text="Hello! This is some really long text which will allow me to see how well the text wraps onto a new line once the message gets too long. :)" />
                <Message avatar="https://picsum.photos/48?random=2" author="Kheraa" text="Oh yeah, no worries. I understand what you're doing! :)" />
            </div>
            <MessageBar />
        </div>
    );
}

const MessageBar = () => {
    return (
        <div className="h-16 fixed bottom-0 w-full bg-gray-800">
        </div>
    );
}

const Message = ({avatar, author, text}) => {
    return (
        <div className="p-4 w-full flex flex-row">
            <img className="rounded-full h-12 w-12 mr-4" src={`${avatar}`} width="48" height="48" />
            <div className="">
                <h3 className="font-semibold text-base text-gray-200">{author}</h3>
                <p className="text-sm text-gray-400">{text}</p>
            </div>
        </div>
    );
};

export default Main;