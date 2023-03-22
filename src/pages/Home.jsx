import Search from "../components/search/Search";
import Avatar from "./../assets/images/github-octocat.png";
import Company from "./../assets/images/icon-company.svg";
import Location from "./../assets/images/icon-location.svg";
import Twitter from "./../assets/images/icon-twitter.svg";
import Website from "./../assets/images/icon-website.svg";


const Home = () => {
    return (<div className="bg-very-dark-blue h-screen flex flex-col justify-center items-center">
        <div className="flex justify-between w-5/12">
            <h2 className="text-white text-2xl font-bold">devfinder</h2>
            <div>
                <span className="text-white text-base uppercase tracking-wider mr-5">light</span>
                <button className="bg-sun w-5 h-5"></button>
            </div>
        </div>
        <Search />
        <div className="mt-6 w-5/12 h-main-card rounded-xl bg-dark-desaturated-blue p-8 flex">
            <img src={Avatar} alt="user picture" className="w-32 h-32 rounded-full" />
            <div className="w-full ml-10">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <h1 className="text-white font-bold text-2xl">The Octocat</h1>
                    <p className="text-saturated-white text-base items-end mt-1.5 text-right">Joined 25 Jan 2011</p>
                    <p className="text-blue text-lg">@octocat</p>
                </div>
                <div className="mt-5">
                    <p className="text-grayish-blue font-bold">This profile has no bio</p>
                </div>
                <div className="mt-10 flex justify-around bg-very-dark-blue py-4 rounded-xl">
                    <div>
                        <h3 className="text-saturated-white">Repos</h3>
                        <span className="text-white font-bold text-2xl">8</span>
                    </div>
                    <div>
                        <h3 className="text-saturated-white">Followers</h3>
                        <span className="text-white font-bold text-2xl">3938</span>
                    </div>
                    <div>
                        <h3 className="text-saturated-white">Following</h3>
                        <span className="text-white font-bold text-2xl">9</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-10">
                    <div className="flex">
                        <img src={Location} alt="Location" className="w-4 h-5" />
                        <h4 className="text-saturated-white ml-5">San Francisco</h4>
                    </div>
                    <div className="flex">
                        <img src={Twitter} alt="Twitter" className="w-5 h-5 opacity-50" />
                        <h4 className="text-saturated-white opacity-50 ml-5">Not Available</h4>
                    </div>
                    <div className="flex">
                        <img src={Website} alt="Website" className="w-5 h-5" />
                        <h4 className="text-saturated-white ml-5">https://github.blog</h4>
                    </div>
                    <div className="flex">
                        <img src={Company} alt="Company" className="w-5 h-5" />
                        <h4 className="text-saturated-white ml-5">@github</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Home;