import React from "react";
import { Link } from "react-router-dom";
import "./categories.css";

function Categories() {
  return (
    <div className="categories">
      <ul className="categories-list flex justify-content-around gap-6 list-none color-black-alpha-70">
        <li>
          <Link to="/mens">Men's</Link>
        </li>
        <li>
          <Link to="/womens">Women's</Link>
        </li>
        <li>
          <Link to="/kids">Kid's</Link>
        </li>
        <li>
          <Link to="/new-arrivals">New Arrival's</Link>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
