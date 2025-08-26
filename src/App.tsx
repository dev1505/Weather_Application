import { type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationDetailPage from './Components/LocationDetailPage';
import MainPageComponent from './Components/MainPageComponent';

function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/location/:lat/:lon" element={<LocationDetailPage />} />
          <Route path="*" element={<MainPageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
