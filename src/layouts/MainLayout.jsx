import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";

const MainLayout = () => {
    return (
        <div>
            <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;