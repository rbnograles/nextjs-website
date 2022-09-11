import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>
                loremipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dol.
            </p>
            <p>
                loremipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dol.
            </p>
            <Link href={"/ninjas"}>
                <a>See Ninja Listing</a>
            </Link>
            <Footer />
        </div>
    );
};

export default Home;
