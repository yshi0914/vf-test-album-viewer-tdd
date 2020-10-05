import React, { useState } from "react";
import AlbumList from "../components/AlbumList";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [users, setUsers] = useState([]);
  let list = <div>Loading data....</div>;
  fetch(`https://jsonplaceholder.typicode.com/albums`)
    .then((response) => response.json())
    .then((json) => {
      setAlbums(json);
    });
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((json) => {
      setUsers(json);
    });

  if (albums.length === 0) {
    list = <h4>Waiting for the data...</h4>;
  }
  return (
    <div>
      <h1>All albums with its associated User Name</h1>
      <AlbumList albumsData={albums} usersData={users} />
      {list}
    </div>
  );
};
export default Album;
