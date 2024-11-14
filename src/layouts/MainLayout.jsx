import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import Navbar from "../components/Navbar/Navbar";
import RightNavbar from "../components/RightNavbar/RightNavbar";
const MainLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto py-2">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">main Section</section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;