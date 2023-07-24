import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import Search from "../Search/Search";

const Home = () => {
    return (
        <div className="text-4xl font-bold">
            <Search />
            <Card />
           <Gallery />

        </div>
    );
};

export default Home;