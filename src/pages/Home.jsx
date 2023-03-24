import Card from "../components/card/Card";
import { useState } from "react";

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (<div className={`${isDarkMode ? "bg-white" : "bg-very-dark-blue"} transition-colors duration-500 h-screen flex flex-col justify-center items-center`}>
        <div className="flex justify-between w-5/12">
            <h2 className={`${isDarkMode ? "text-very-dark-blue" : "text-white"} transition-colors duration-500 text-2xl font-bold`}>devfinder</h2>
            <div className="flex items-center">
                <span className={`${isDarkMode ? "text-very-dark-blue" : "text-white"} transition-colors duration-500 text-base uppercase tracking-wider mr-5`}>{isDarkMode ? "light" : "dark"}</span>
                <button onClick={handleThemeToggle} className={`${isDarkMode ? "bg-moon" : "bg-sun"} transition-all duration-500 w-5 h-5 hover:opacity-60`}></button>
            </div>
        </div>

        <Card isDarkMode={isDarkMode} />
    </div>);
}

export default Home;