import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <title>Next JS App</title>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
