import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InsumosPage } from './pages/InsumosPage';
import { CustosFixosPage } from './pages/CustosFixosPage.tsx';
import { HomePage } from './pages/HomePage';
import { Header } from './layout/Header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>         
          <Route path="/" element={<HomePage />} />
          <Route path="/insumos" element={<InsumosPage />} />
          <Route path="/custos" element={<CustosFixosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}