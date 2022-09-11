import styles from "../../styles/Users.module.css";

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const paths = data.map((user) => {
        return {
            params: { id: user.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    return {
        props: {
            user: data,
        },
    };
};

const Details = ({ user }) => {
    console.log(user);
    return (
        <div>
            <h1 style={{ color: "#001e3c" }}>Profile</h1>
            <b className={styles.label}>Name</b>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <br />
            <b className={styles.label}>Address</b>
            <p>{user.address.suite}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>
                {user.address.geo.lat}, {user.address.geo.lng}
            </p>
            <b className={styles.label}>Company</b>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
        </div>
    );
};

export default Details;
