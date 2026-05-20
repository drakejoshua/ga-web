import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className='page'>
            <span>
                This is the contact page
            </span>

            <div>
                <Link to="/about">Go to about page</Link>
                <Link to="/contact">Go to contact page</Link>
            </div>
        </div>
    )
}
