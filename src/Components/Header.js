import {Route, Link, Routes, Navigate} from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <nav>
                <ul id="ul-nav">
                    <Link to="/restroomsearch" id="nav-restroom-search"><li className="header-li">Restroom Search</li></Link>
                    <img src="https://images2.imgbox.com/92/7d/4kRGTKuM_o.png" alt="The transgender symbol" id="header-img" />
                    <Link to="/mylist" id="nav-mylist"><li className="header-li">My Restroom List</li></Link>
                </ul>
            </nav>
            <h1 className="header-text">Restroom Resource: Find All-Gender Restrooms</h1>
        </div>
    )
}

export default Header;
