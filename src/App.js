import logo from './logo.svg';
import './App.css';

import{BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
  <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
          </BrowserRouter>
  
  </>
  );
}

export default App;
