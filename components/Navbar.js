import Link from "next/link";

const Navbar = () => {
    return (
        <div className="logo">
            <h1 className="navbar-header">Ninja List</h1>
            <Link href={"/"}>
                <a>Home</a>
            </Link>
            <Link href={"/about"}>
                <a>About</a>
            </Link>
            <Link href={"/ninjas"}>
                <a>Ninja List</a>
            </Link>
        </div>
    );
};

export default Navbar;
