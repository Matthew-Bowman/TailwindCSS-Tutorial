import TopBar from "./TopBar"

const Main = () => {
    return (
        <div className="w-full h-screen
                        fixed left-80
                        bg-gray-700">
            <TopBar bg="700" ug="800" heading="General"/>
        </div>
    );
}

const Message = () => {
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
};

export default Main;