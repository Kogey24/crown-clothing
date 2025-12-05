import './App.css';
import Homepage from './pages/home/homepage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/shop' Component={ShopPage} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
