import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='page'>
            <span>
                This is the home page
            </span>

            <div>
                <Link to="/about">Go to about page</Link>
                <Link to="/contact">Go to contact page</Link>
            </div>
        </div>
    )
}
