import React, { useState, useEffect } from "react";
import CryptoAES from "crypto-js/aes";
import CryptoENC from "crypto-js/enc-utf8";

const FullPhoto = (props) => {
  const [dept, setdept] = useState("");
  useEffect(() => {
    let encryptedStr = props.match.params.id.replace("_99999_", "/");
    let decryptedStr = CryptoAES.decrypt(encryptedStr, "secret").toString(
      CryptoENC
    );
    setdept(decryptedStr);
  }, [props.match.params.id]);

  if (dept.length > 0) {
    return (
      <div>
        <img src={dept} alt="Original" />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default FullPhoto;
