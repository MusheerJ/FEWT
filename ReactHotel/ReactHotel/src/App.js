import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Eventpage from "./Pages/Eventpage";
import Gallerypage from "./Pages/Gallerypage";
import Home from "./Pages/Home";
import Menupage from "./Pages/Menupage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallerypage />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/menu" element={<Menupage />} />
          <Route exact path="/events" element={<Eventpage />} />
          <Route exact path="/contact" element={<Contactpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
