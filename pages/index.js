import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>
                loremipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dol.
            </p>
            <p className={styles.text}>
                loremipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adipiscing elit.
            </p>
            <Link href={"/users"}>
                <a className={styles.btn}>See Users Listing</a>
            </Link>
        </div>
    );
};

export default Home;
