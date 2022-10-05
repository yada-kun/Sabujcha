import Header from "./component/header/Header";
import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/footer/Footer";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element ={<Shop /> } />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
