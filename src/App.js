import './App.css';

import Main from "./components/Main"
import ContentBar from "./components/ContentBar";
import SideBar from "./components/SideBar";
import UserBar from "./components/UserBar";

function App() {
  return (
    <div>
      <div className='flex flex-row'>
        <SideBar />
        <ContentBar />
        <Main />
        {/* <UserBar /> */}
      </div>
    </div>
  );
}

export default App;