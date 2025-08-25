import { type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentLocWeatherDataCard from './Components/CurrentLocWeatherDataCard';
import MainPageComponent from './Components/MainPageComponent';

function App(): ReactElement {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/card" element={<CurrentLocWeatherDataCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
