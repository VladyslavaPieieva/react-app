import "./App.css";
import Footer from "./Footer";

import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <Footer />
    </div>
  );
}

export default App;
