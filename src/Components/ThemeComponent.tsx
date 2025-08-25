import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContextComp';

export default function ThemeComponent() {

    const context = useContext(GlobalContext);

    if (!context) {
        return <div></div>;
    }

    const { weatherAppData, setWeatherAppData } = context;

    function handleThemeToggle(theme: string) {
        setWeatherAppData({ ...weatherAppData })
    }

    return (
        <div className='fixed top-1 right-1 w-fit rounded-2xl bg-stone-700 p-2 flex'>
            <div
                className={`cursor-pointer text-orange-400 w-full rounded-full p-1`}
                onClick={() => handleThemeToggle("light")}
            >
                <LightModeIcon fontSize='large' />
            </div>
            <div
                className={`cursor-pointer text-black w-full rounded-full p-1`}
                onClick={() => handleThemeToggle("dark")}
            >
                <DarkModeIcon fontSize='large' />
            </div>
        </div>
    )
}
