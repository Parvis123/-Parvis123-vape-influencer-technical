import "./App.css";

import Header from "./components/header/Header";
import MobileBackgroundImage from "./components/mobile-background-image/MobileBackgroundImage";
import MessageUsMobile from "./components/message-us-mobile/MessageUsMobile";

function App() {
  return (
    <div className="App">
      <Header />
      <MobileBackgroundImage />
      <MessageUsMobile />
    </div>
  );
}

export default App;
