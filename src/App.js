import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Category,
  SingleProduct,
  Navbar,
  Footer,
  Newsletter,
} from "./components";
import AppContext from "./utils/context";

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<Category />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
};

export default App;
