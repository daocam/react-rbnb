import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import ApartDetails from "./pages/ApartDetails.tsx";
import Error from "./pages/Error404.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto py-5 sm:px-0 px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apart/:id" element={<ApartDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
