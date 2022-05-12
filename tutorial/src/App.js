import './App.css';

import SideBar from "./SideBar";
import ContentBar from "./ContentBar";

function App() {
  return (
    <div className="flex">
        <ContentBar />
        <SideBar />
    </div>
  );
}

export default App;