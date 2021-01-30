import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
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
  return (
    <div>
      <Table commit={commit} />
    </div>
  );
};
export default MainComponent;
