import "./App.css";

import Header from "./components/header/Header";
import MobileBackgroundImage from "./components/mobile-background-image/MobileBackgroundImage";
import MessageUsMobile from "./components/message-us-mobile/MessageUsMobile";
import Shadowtext from "./components/shadow-text/ShadowText";
import VapeCarousel from "./components/vape-carousel/VapeCarousel";

function App() {
  return (
    <div className="App">
      <Header />
      <MobileBackgroundImage />
      <MessageUsMobile />
      <Shadowtext
        foregroundText="MAKE MONEY BY COMPLETING TASKS"
        backgroundText="DO YOU VAPE?"
      />
      <VapeCarousel />
    </div>
  );
}

export default App;
