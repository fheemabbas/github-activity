import React, { useState, useEffect } from "react";
import axios from "axios";
const MainComponent = (props) => {
  const [commit, setCommit] = useState([]);
  useEffect(async () => {
    await axios
      .get(`https://api.github.com/repos/fheemabbas/cart-web/commits`)
      .then((res) => {
        setCommit(res.data);
        return res.data;
      });
  }, []);
  console.log("commit is :", commit);
  return <div>Main Component</div>;
};
export default MainComponent;
