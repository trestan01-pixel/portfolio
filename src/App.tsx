import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
// ✅ Убедитесь, что этот импорт есть и путь правильный
import { SvgFilters } from './components/SvgFilters'; 

const App = () => {
  return (
    <>
      {/* ✅ Убедитесь, что этот компонент вызывается здесь */}
      <SvgFilters />
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;