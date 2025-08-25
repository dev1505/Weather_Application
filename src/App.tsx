import { useContext, useEffect, type ReactElement } from 'react';
import { AllComponents, handleApiCall } from './CommonFunctions';
import { GlobalContext } from './Context/GlobalContextComp';

function App(): ReactElement {

  const context = useContext(GlobalContext);

  if (!context) {
    return <div></div>;
  }

  const { weatherAppData, setWeatherAppData } = context;

  useEffect(() => {

    handleApiCall({
      url: "https://wttr.in/?format=j1",
      apiStates: (data: any) => {
        setWeatherAppData({
          ...weatherAppData,
          apiStates: data
        })
      }
    })

  }, [])

  return (
    <>
      <div className={`pt-16 md:pt-20 bg-slate-500 h-full`}>
        <div className='flex flex-col wrap-break-word'>
          {
            AllComponents?.length > 0 ?
              AllComponents?.map((data, index) => {
                const Component = data?.component;
                return (
                  <div key={index}>
                    <Component />
                  </div>
                )
              })
              : ""
          }
        </div>
      </div>
    </>
  );
}

export default App;
