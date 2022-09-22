import { Route, Routes, BrowserRouter } from 'react-router-dom';
import * as Pages from './pages/index';
import * as Components from './components/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Components.SharedLayout />}>
            <Route index element={<Pages.Home />} />
            <Route path='dashboard' element={<Pages.Dashboard />} />
            <Route path='write' element={<Pages.Write />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
