import Link from "next/link";
import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            users: data,
        },
    };
};

/**
 *
 * @param {users data from server} param0
 * @returns list of users in a card format
 */
const renderUsers = (users) => {
    return users.map((user, i) => {
        return (
            <Link href={`/users/${user.id}`} key={i}>
                <div className={styles.single}>
                    <h1 className={styles.cardName}>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            </Link>
        );
    });
};

const Users = ({ users }) => {
    return (
        <div className="users">
            <h1>Users</h1>
            <p>List of all registered users</p>
            {renderUsers(users)}
        </div>
    );
};

export default Users;
