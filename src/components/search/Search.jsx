import search from "./../../assets/images/icon-search.svg";

const Search = () => {
    return (
        <div className="mt-10 w-5/12 h-16 rounded-xl bg-dark-desaturated-blue flex justify-between">
            <div className="flex w-4/5">
                <img src={search} alt="Search" className="h-6 w-6 m-5" />
                <input type="text" placeholder="Search GitHub username..." className="bg-dark-desaturated-blue my-3 w-4/5 text-lg placeholder-white text-white focus:outline-none" />
            </div>
            <button className="text-white bg-blue m-2 w-28 rounded-lg hover:bg-hover-blue transition-all ease-in duration-100">Search</button>
        </div>
    );
}

export default Search;