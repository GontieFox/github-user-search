import { useState } from "react";
import search from "./../../assets/images/icon-search.svg";

import Avatar from "./../../assets/images/github-octocat.png";
import Company from "./../../assets/images/icon-company.svg";
import Location from "./../../assets/images/icon-location.svg";
import Twitter from "./../../assets/images/icon-twitter.svg";
import Website from "./../../assets/images/icon-website.svg";

const Card = () => {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState({});

    const handleSubmit = async () => {
        const responce = await fetch(`https://api.github.com/users/${user}`);
        const data = await responce.json();

        setUserData(data);
    }

    const date = new Date(userData.created_at);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const formattedDate = `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    return (<>
        <div className="mt-10 w-5/12 h-16 rounded-xl bg-dark-desaturated-blue flex justify-between">
            <div className="flex w-4/5">
                <img src={search} alt="Search" className="h-6 w-6 m-5" />
                <input type="text" placeholder="Search GitHub username..." onChange={(e) => setUser(e.target.value)} className="bg-dark-desaturated-blue my-3 w-4/5 text-lg placeholder-white text-white focus:outline-none" />
            </div>
            <button onClick={handleSubmit} type="button" className="text-white bg-blue m-2 w-28 rounded-lg hover:bg-hover-blue transition-all ease-in duration-100">Search</button>
        </div>

        <div className="mt-6 w-5/12 h-main-card rounded-xl bg-dark-desaturated-blue p-8 flex">
            <img src={userData.avatar_url ? userData.avatar_url : Avatar} alt="user" className="w-32 h-32 rounded-full" />
            <div className="w-full ml-10">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <h1 className="text-white font-bold text-2xl">{userData.login ? userData.login : "Not available"}</h1>
                    <p className="text-saturated-white text-base items-end mt-1.5 text-right">{userData.created_at ? formattedDate : "Not available"}</p>
                    <p className="text-blue text-lg">@{userData.login ? userData.login : "octocat"}</p>
                </div>
                <div className="mt-5">
                    <p className="text-grayish-blue font-bold">{userData.bio ? userData.bio : "This profile has no bio"}</p>
                </div>
                <div className="mt-10 flex justify-around bg-very-dark-blue py-4 rounded-xl">
                    <div>
                        <h3 className="text-saturated-white">Repos</h3>
                        <span className="text-white font-bold text-2xl">{userData.public_repos ? userData.public_repos : "0"}</span>
                    </div>
                    <div>
                        <h3 className="text-saturated-white">Followers</h3>
                        <span className="text-white font-bold text-2xl">{userData.followers ? userData.followers : "0"}</span>
                    </div>
                    <div>
                        <h3 className="text-saturated-white">Following</h3>
                        <span className="text-white font-bold text-2xl">{userData.following ? userData.following : "0"}</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-10">
                    <div className="flex">
                        <img src={Location} alt="Location" className={`w-4 h-5 ${userData.location ? "" : "opacity-50"}`} />
                        <h4 className={`text-saturated-white ${userData.location ? "" : "opacity-50"} ml-5`}>{userData.location ? userData.location : "Not available"}</h4>
                    </div>
                    <div className="flex">
                        <img src={Twitter} alt="Twitter" className={`w-5 h-5 ${userData.twitter_username ? "" : "opacity-50"}`} />
                        <h4 className={`text-saturated-white ${userData.twitter_username ? "" : "opacity-50"} ml-5`}>{userData.twitter_username ? userData.twitter_username : "Not available"}</h4>
                    </div>
                    <div className="flex">
                        <img src={Website} alt="Website" className={`w-5 h-5 ${userData.blog ? "" : "opacity-50"}`} />
                        <h4 className={`text-saturated-white ${userData.blog ? "" : "opacity-50"} ml-5`}>{userData.blog ? userData.blog : "Not available"}</h4>
                    </div>
                    <div className="flex">
                        <img src={Company} alt="Company" className={`w-5 h-5 ${userData.company ? "" : "opacity-50"}`} />
                        <h4 className={`text-saturated-white ${userData.company ? "" : "opacity-50"} ml-5`}>{userData.company ? userData.company : "Not available"}</h4>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Card;