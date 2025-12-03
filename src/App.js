import './App.css';
import { Homepage } from './pages/home/homepage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Hatspage() {
  return <h1>Hats Page</h1>;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/hats' Component={Hatspage} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
