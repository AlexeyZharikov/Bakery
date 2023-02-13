import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Admin from './pages/admin/admin';
import Main from './pages/main/main.page.jsx';
import Store from './pages/store/store.page';
import About from './pages/about/about';

function App() {
  return (
    
    
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/store" element={<Store />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/admin-page" element={<Admin />}/>
          </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;
