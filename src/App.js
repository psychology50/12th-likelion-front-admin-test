import CalendarPage from "./pages/CalendarPage";
import MainPage from "./pages/MainPage";
import FilePage from "./pages/FilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChartPage from "./pages/ChartPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/ChartPage" element={<ChartPage/>}></Route>
        <Route path="/CalendarPage" element={<CalendarPage/>}></Route>
        <Route path="/FilePage" element={<FilePage/>}></Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App;