import { Link } from "react-router-dom";
function Menu(){
    return(
        <div>
            <Link to="/home">Home |</Link>
            <Link to="/about">About |</Link>
            <Link to="/contact">Contact |</Link>
            <Link to="/login">Login |</Link>
            <Link to="/create">Create |</Link>
            <Link to="/product">Product |</Link>
{/*             <Link to="/arraysort">Arraysort |</Link> */}
        </div>
    );
}
export default Menu