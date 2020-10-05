import React from "react";
import ThumbnailPhoto from "./ThumbnailPhoto";

const PhotoList = (props) => {
  const { data } = props;
  return (
    <div className="row" id="photolist">
      {data &&
        data.map((d) => {
          return <ThumbnailPhoto key={d.id} data={d} />;
        })}
    </div>
  );
};

export default PhotoList;
