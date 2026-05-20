import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className='page'>
            <span>
                This is the about page
            </span>

            <div>
                <Link to="/about">Go to about page</Link>
                <Link to="/contact">Go to contact page</Link>
            </div>
        </div>
    )
}
