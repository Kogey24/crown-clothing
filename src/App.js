import './App.css';
import Homepage from './pages/home/homepage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      < Header />
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
