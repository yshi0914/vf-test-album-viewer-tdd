import React from "react";
import Album from "./Album";
import "bootstrap/dist/css/bootstrap.min.css";

const AlbumList = (props) => {
  const { albumsData } = props;
  const { usersData } = props;

  return (
    <ul className="list-group" id="albumList">
      {albumsData &&
        albumsData.map((d) => {
          let userName =
            usersData &&
            usersData.map((u) => {
              if (u.id === d.userId) return u.name;
              else return null;
            });
          return <Album key={d.id} albumData={d} name={userName} />;
        })}
    </ul>
  );
};

export default AlbumList;
