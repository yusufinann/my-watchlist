import React from "react";
import { Link } from "react-router-dom";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watch List</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">
                {" "}
                <i className="btn">
                  <PlaylistAddIcon style={{ fontSize: "2rem" }} />
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
