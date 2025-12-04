import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SpotDetailPage from "./pages/SpotDetailPage.jsx";
import SubmitUpdatePage from "./pages/SubmitUpdatePage.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/spots/:spotId" element={<SpotDetailPage />} />
          <Route path="/spots/:spotId/update" element={<SubmitUpdatePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
