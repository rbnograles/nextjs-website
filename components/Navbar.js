import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <p className="logo">ryan.dev</p>
            </div>
            <Link href={"/"}>
                <a>Home</a>
            </Link>
            <Link href={"/about"}>
                <a>About</a>
            </Link>
            <Link href={"/items"}>
                <a>Item List</a>
            </Link>
        </nav>
    );
};

export default Navbar;
