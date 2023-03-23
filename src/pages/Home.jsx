import Card from "../components/card/Card";

const Home = () => {
    return (<div className="bg-very-dark-blue h-screen flex flex-col justify-center items-center">
        <div className="flex justify-between w-5/12">
            <h2 className="text-white text-2xl font-bold">devfinder</h2>
            <div>
                <span className="text-white text-base uppercase tracking-wider mr-5">light</span>
                <button className="bg-sun w-5 h-5"></button>
            </div>
        </div>

        <Card />
    </div>);
}

export default Home;