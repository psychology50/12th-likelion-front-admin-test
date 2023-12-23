import "./App.css";
import Header from "./Header.js";
import MainPage from "./pages/MainPage.js";
import CalendarPage from "./pages/CalendarPage.js";
import StaticsPage from "./pages/StaticsPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/CalendarPage" element={<CalendarPage />}></Route>
          <Route path="/StaticsPage" element={<StaticsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
