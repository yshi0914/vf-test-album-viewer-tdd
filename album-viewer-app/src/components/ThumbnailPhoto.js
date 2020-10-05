import React from "react";
import { Link } from "react-router-dom";
import CryptoAES from "crypto-js/aes";

const ThumbnailPhoto = (props) => {
  const { data } = props;
  let encryptedStr = CryptoAES.encrypt(
    data.url.toString(),
    "secret"
  ).toString();

  return (
    <div className="col-4">
      <div className="card">
        <Link to={`/photo/full/${encryptedStr.replace("/", "_99999_")}`}>
          <img
            attr={encryptedStr}
            className="card-img-top"
            src={data.thumbnailUrl}
            alt="Album Thumbnail"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">Title: {data.title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailPhoto;
