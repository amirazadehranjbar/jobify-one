import {Link} from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>login page</h1>
            <Link to="/register">go to register page</Link>
        </div>
    )
}

export default Login
