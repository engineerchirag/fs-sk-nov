import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            {/* <a href="/"><span>Movie List</span></a>
            <a href="/movie-detail"><span>Movie Detail</span></a>
            <a href="/add-movie"><span>Add Movie</span></a> */}

            <Link to="/"><span>Movie List</span></Link>
            <Link to="/add-movie"><span>Add Movie</span></Link>
        </div>
    )
}

export default Header;