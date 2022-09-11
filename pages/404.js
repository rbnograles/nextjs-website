import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Page404 = () => {
    const router = useRouter();
    useEffect(() => {
        // executed on first mount
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);
        // cleanup after timeout
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>That page cannot be found &#128542;.</h2>
            <p>
                Go back to the{" "}
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
        </div>
    );
};

export default Page404;
