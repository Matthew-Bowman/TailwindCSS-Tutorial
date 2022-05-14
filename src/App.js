import './App.css';

import Main from "./Main"
import ContentBar from "./ContentBar";
import SideBar from "./SideBar";
import UserBar from "./UserBar";
import Message from "./Message";

function App() {
  return (
    <div>
      <div className='flex flex-row'>
        <ContentBar />
        <SideBar />
        <Main>
          <Message />
        </Main>
        <UserBar />
      </div>
    </div>
  );
}

export default App;