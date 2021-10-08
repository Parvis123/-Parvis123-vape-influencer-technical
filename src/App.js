import "./App.css";

import Header from "./components/header/Header";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Button info>More Info</Button>
      <Button earning>Start Earning!</Button>
    </div>
  );
}

export default App;
