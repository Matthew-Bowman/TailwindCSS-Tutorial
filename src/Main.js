import TopBar from "./TopBar"

const Main = () => {
    return (
        <div className="w-full h-screen
                        fixed left-80
                        bg-gray-700">
            <TopBar bg="700" ug="800" heading="General" />
            <Message />
        </div>
    );
}

const Message = () => {
    return (
        <div>
            <img src="https://picsum.photos/200" width="64" height="64" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
};

export default Main;