import { useState } from "react";
import search from "./../../assets/images/icon-search.svg";

import Avatar from "./../../assets/images/github-octocat.png";
import CompanyLight from "./../../assets/images/icon-company-light.svg";
import LocationLight from "./../../assets/images/icon-location-light.svg";
import TwitterLight from "./../../assets/images/icon-twitter-light.svg";
import WebsiteLight from "./../../assets/images/icon-website-light.svg";
import CompanyDark from "./../../assets/images/icon-company-dark.svg";
import LocationDark from "./../../assets/images/icon-location-dark.svg";
import TwitterDark from "./../../assets/images/icon-twitter-dark.svg";
import WebsiteDark from "./../../assets/images/icon-website-dark.svg";

const Card = ({ isDarkMode }) => {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState({});

    const handleSubmit = async () => {
        const responce = await fetch(`https://api.github.com/users/${user}`);
        const data = await responce.json();

        setUserData(data);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    const date = new Date(userData.created_at);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const formattedDate = `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    return (<>
        <div className={`${isDarkMode ? "bg-saturated-white" : "bg-dark-desaturated-blue"} transition-colors duration-500 mt-10 2xl:w-5/12 xl:w-6/12 lg:w-7/12 sm:w-8/12 w-11/12 h-16 rounded-xl flex justify-between shadow-card`}>
            <div className="flex w-4/5">
                <img src={search} alt="Search" className="h-6 w-6 m-5" />
                <input type="text" placeholder="Search GitHub username..." onChange={(e) => setUser(e.target.value)} onKeyUp={handleKeyDown} className={`${isDarkMode ? "bg-saturated-white placeholder-dark-desaturated-blue text-dark-desaturated-blue" : "bg-dark-desaturated-blue placeholder-white text-white"} transition-colors duration-500 my-3 w-4/5 sm:text-lg text-base focus:outline-none`} />
            </div>
            <button onClick={handleSubmit} type="button" className="text-white bg-blue m-2 w-28 rounded-lg hover:bg-hover-blue transition-all ease-in duration-100">Search</button>
        </div>

        <div className={`${isDarkMode ? "bg-saturated-white" : "bg-dark-desaturated-blue"} transition-colors duration-500 mt-6 2xl:w-5/12 xl:w-6/12 lg:w-7/12 sm:w-8/12 w-11/12 xl:h-card-desktop rounded-xl sm:p-8 p-4 flex shadow-card`}>
            <img src={userData.avatar_url ? userData.avatar_url : Avatar} alt="user" className="sm:w-32 sm:h-32 w-20 h-20 rounded-full flex absolute xl:relative" />
            <div className="w-full xl:ml-10">
                <div className="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-2 gap-0 grid-cols-1 grid-rows-3 sm:ml-40 ml-24 xl:ml-0">
                    <h1 className={`${isDarkMode ? "text-dark-desaturated-blue" : "text-white"} transition-colors duration-500 font-bold 2xl:text-2xl lg:text-xl`}>{userData.login ? userData.login : "Not available"}</h1>
                    <p className={`${isDarkMode ? "text-dark-desaturated-blue" : "text-saturated-white"} order-3 xl:order-none transition-colors duration-500 text-base items-end mt-1.5 xl:text-right`}>{userData.created_at ? formattedDate : "Not available"}</p>
                    <p className="text-blue text-lg">@{userData.login ? userData.login : "octocat"}</p>
                </div>
                <div className="mt-10 xl:mt-5">
                    <p className="text-grayish-blue font-bold pt-3">{userData.bio ? userData.bio : "This profile has no bio"}</p>
                </div>
                <div className={`${isDarkMode ? "bg-dark-white" : "bg-very-dark-blue"} transition-colors duration-500 mt-6 flex justify-around py-4 rounded-xl`}>
                    <div>
                        <h3 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} transition-colors duration-500`}>Repos</h3>
                        <span className={`${isDarkMode ? "text-dark-blue" : "text-white"} transition-colors duration-500 font-bold sm:text-2xl text-lg`}>{userData.public_repos ? userData.public_repos : "0"}</span>
                    </div>
                    <div>
                        <h3 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} transition-colors duration-500`}>Followers</h3>
                        <span className={`${isDarkMode ? "text-dark-blue" : "text-white"} transition-colors duration-500 font-bold sm:text-2xl text-lg`}>{userData.followers ? userData.followers : "0"}</span>
                    </div>
                    <div>
                        <h3 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} transition-colors duration-500`}>Following</h3>
                        <span className={`${isDarkMode ? "text-dark-blue" : "text-white"} transition-colors duration-500 font-bold sm:text-2xl text-lg`}>{userData.following ? userData.following : "0"}</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 gap-5 mt-6">
                    <div className="flex">
                        <img src={isDarkMode ? LocationDark : LocationLight} alt="Location" className={`w-4 h-5 transition-all duration-500 ${userData.location ? "" : "opacity-60"}`} />
                        <h4 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} text-sm transition-colors duration-500 ${userData.location ? "" : "opacity-60"} ml-3`}>{userData.location ? userData.location : "Not available"}</h4>
                    </div>
                    <div className="flex md:justify-end">
                        <img src={isDarkMode ? TwitterDark : TwitterLight} alt="Twitter" className={`w-5 h-5 transition-all duration-500 ${userData.twitter_username ? "" : "opacity-60"}`} />
                        <h4 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} text-sm transition-colors duration-500 ${userData.twitter_username ? "" : "opacity-60"} ml-3`}>{userData.twitter_username ? userData.twitter_username : "Not available"}</h4>
                    </div>
                    <div className="flex">
                        <img src={isDarkMode ? WebsiteDark : WebsiteLight} alt="Website" className={`w-5 h-5 transition-all duration-500 ${userData.blog ? "" : "opacity-60"}`} />
                        <h4 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} text-sm transition-colors duration-500 ${userData.blog ? "" : "opacity-60"} ml-3`}>{userData.blog ? userData.blog : "Not available"}</h4>
                    </div>
                    <div className="flex md:justify-end">
                        <img src={isDarkMode ? CompanyDark : CompanyLight} alt="Company" className={`w-5 h-5 transition-all duration-500 ${userData.company ? "" : "opacity-60"}`} />
                        <h4 className={`${isDarkMode ? "text-very-dark-blue" : "text-saturated-white"} text-sm transition-colors duration-500 ${userData.company ? "" : "opacity-60"} ml-3`}>{userData.company ? userData.company : "Not available"}</h4>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;