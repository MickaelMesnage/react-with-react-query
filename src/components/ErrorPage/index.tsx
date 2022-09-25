import { Link } from "react-router-dom";

const ErrorPage = () => (
    <div>
        <div>An error occured</div>
        <Link to="/home">Back to homepage</Link>
    </div>
);
    
export default ErrorPage;