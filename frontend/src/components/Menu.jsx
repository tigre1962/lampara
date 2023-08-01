import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Menu(){
    return(
    <Container>
        <nav>
            <ul>
                <li>
                <Link to={"/"}>Home</Link>
                </li>

                <li>
                <Link to="/login/">Login</Link>
                </li>
                
                <li>
                <Link to="/signup">Sign up</Link>
                </li>
                
                <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    </Container>
    );
}

