import { type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentLocWeatherDataCard from './Components/CurrentLocWeatherDataCard';
import MainPageComponent from './Components/MainPageComponent';
import { useGlobalContext } from './hooks/useGlobalContext';

function App(): ReactElement {

  const { userSearch } = useGlobalContext();

  const { placeId } = userSearch.current;

  console.log(placeId)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          {
            placeId > 0 &&
            < Route path={`/${placeId}`} element={<CurrentLocWeatherDataCard />} />
          }
          <Route path="*" element={<MainPageComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
