import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
const Photo = (props) => {
  const [photos, setPhotos] = useState([]);

  // load all the albums
  fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${props.match.params.id}`
  )
    .then((response) => response.json())
    .then((json) => {
      setPhotos(json);
    });

  let list = <div>Fetching data ...</div>;
  if (photos.length === 0) {
    list = <h4>Waiting for the data...</h4>;
  }
  const albumName = new URLSearchParams(props.location.search).get("albumName");

  if (photos && photos.length > 0) {
    list = <PhotoList data={photos} />;
  } else {
    list = <h4>Loading ....</h4>;
  }

  return (
    <div>
      <h1>Album Name : {albumName}</h1>
      {list}
    </div>
  );
};

export default Photo;
