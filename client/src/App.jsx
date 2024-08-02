import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import Navbar from "@/components/navbar/navbar";
import HomePage from "@/pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
