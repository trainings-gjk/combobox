import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Combo from './components/Combo';
import Modeli from './components/Modeli';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Combo />} />
                <Route path = '/modeli' element = {<Modeli />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
