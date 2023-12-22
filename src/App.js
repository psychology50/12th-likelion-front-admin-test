import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Calendar from "./pages/Calendar";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
  );
}

export default App;
