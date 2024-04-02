import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListingPage from './component/ListingPage';
import AddProduct from './component/AddProduct';
import RegisterPage from './component/RegisterPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/re' element={<ListingPage />} />
          <Route path='/' element={<RegisterPage />} />
          <Route path='/addProduct' element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
