import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Reservation from "./pages/Reservations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservation />} />
    </Routes>
  );
}

export default App;
