import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Album = (props) => {
  const { albumData } = props;
  const { name } = props;
  return (
    <li className="list-group-item list-group-item-action flex-column align-items-start text-left">
      <Link to={`/photo/${albumData.id}?albumName=${albumData.title}`}>
        {albumData.id}. {albumData.title} | Name: {name}
      </Link>
    </li>
  );
};

export default Album;
