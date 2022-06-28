import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Video, NotFound } from "./pages";
import { Footer, NavBar } from "./components/common";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:videoId" element={<Video />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
