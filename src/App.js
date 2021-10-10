import "./App.css";

import CarouselContainer from "./containers/carousel-container/CarouselContainer";
import ContentContainer from "./containers/content-container/ContentContainer";

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
      <ContentContainer>
        <MessageUsMobile />
        <Shadowtext
          foregroundText="MAKE MONEY BY COMPLETING TASKS"
          backgroundText="DO YOU VAPE?"
        />
        <CarouselContainer>
          <VapeCarousel />
        </CarouselContainer>
        <Shadowtext foregroundText="BY TOP BRANDS" backgroundText="TRUSTED" />
      </ContentContainer>
    </div>
  );
}

export default App;
