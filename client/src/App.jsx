import Navbar from "@/components/navbar/navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Navbar />
      <p className="text-red-400">Hello World</p>
      <Toaster />
    </div>
  );
}

export default App;
