import { Link } from "react-router-dom";

const ErrorPage = () => (
    <>
        <div>An error occured</div>
        <Link to="/home">Back to homepage</Link>
    </>
);
    
export default ErrorPage;
